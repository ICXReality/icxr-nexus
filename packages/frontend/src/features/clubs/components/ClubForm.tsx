import Fieldset from "@/components/ui/Fieldset";
import {
  Button,
  Card,
  Field,
  Flex,
  For,
  Grid,
  HStack,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { MdAdd, MdCancel, MdCheck, MdClose, MdWidgets } from "react-icons/md";
import { ClubActivities } from "../config/ClubTags";
import { useClubForm } from "../data/ClubForm";
import ClubActivity from "./ClubActivity";

type ClubFormProps = {};

const ClubForm: React.FC<ClubFormProps> = ({}) => {
  const form = useClubForm();
  return (
    <Stack gap="12">
      <Fieldset
        legend="Your Club"
        helperText="Provide information about your club"
      >
        <form.AppField name={"university"}>
          {(field) => <field.TextField label="University" required />}
        </form.AppField>
        <form.AppField name={"name"}>
          {(field) => <field.TextField label="Club Name" required />}
        </form.AppField>
        <form.AppField name={"email"}>
          {(field) => <field.TextField label="Club Email" />}
        </form.AppField>
        <form.AppField name={"website"}>
          {(field) => <field.TextField label="Club Website" />}
        </form.AppField>
        <form.AppField name={"description"}>
          {(field) => <field.TextArea label="Club Description" />}
        </form.AppField>
        <form.AppField name={"logo"}>
          {(field) => <field.UploadField label="Club Logo" />}
        </form.AppField>
        <form.AppField name={"primaryColor"}>
          {(field) => <field.ColorPicker label="Primary Color" />}
        </form.AppField>
        <form.AppField name={"secondaryColor"}>
          {(field) => <field.ColorPicker label="Secondary Color" />}
        </form.AppField>
        <form.Field name="links" mode="array">
          {(field) => (
            <Field.Root>
              <Field.Label>Links</Field.Label>
              <Field.HelperText>
                Got an Instagram, VRChat group, or some other website you want
                to show off? Put it here!
              </Field.HelperText>
              <Stack width={"full"}>
                <For each={field.state.value}>
                  {(_, i) => (
                    <form.AppField key={i} name={`links[${i}]`}>
                      {(subfield) => (
                        <HStack>
                          <subfield.TextField
                            placeholder="https://example.com"
                            type="url"
                          />
                          <IconButton
                            onClick={() => field.removeValue(i)}
                            variant={"ghost"}
                          >
                            <MdClose />
                          </IconButton>
                        </HStack>
                      )}
                    </form.AppField>
                  )}
                </For>
                <Button onClick={() => field.pushValue("")} variant="outline">
                  <MdAdd /> Add Link
                </Button>
              </Stack>
            </Field.Root>
          )}
        </form.Field>
      </Fieldset>

      <Fieldset legend="Officers" helperText="Who helps run your club?">
        <form.Field name="officers" mode="array">
          {(field) => (
            <Stack width={"full"}>
              <For
                each={Array.isArray(field.state.value) ? field.state.value : []}
              >
                {(_, i) => (
                  <Stack key={i}>
                    <Card.Root>
                      <Card.Header>
                        <HStack
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Card.Title>Officer {i + 1}</Card.Title>
                          <IconButton
                            onClick={() => field.removeValue(i)}
                            variant={"ghost"}
                            aria-label="Remove Officer"
                          >
                            <MdClose />
                          </IconButton>
                        </HStack>
                      </Card.Header>
                      <Card.Body>
                        <Stack gap="4">
                          <form.AppField name={`officers[${i}].name`}>
                            {(field) => <field.TextField label="Name" />}
                          </form.AppField>
                          <form.AppField name={`officers[${i}].email`}>
                            {(field) => <field.TextField label="Email" />}
                          </form.AppField>
                          <form.AppField name={`officers[${i}].discord`}>
                            {(field) => <field.TextField label="Discord" />}
                          </form.AppField>
                          <form.AppField name={`officers[${i}].title`}>
                            {(field) => <field.TextField label="Title" />}
                          </form.AppField>
                          <form.AppField name={`officers[${i}].isRep`}>
                            {(field) => (
                              <field.CheckboxField>
                                Is Representative
                              </field.CheckboxField>
                            )}
                          </form.AppField>
                        </Stack>
                      </Card.Body>
                    </Card.Root>
                  </Stack>
                )}
              </For>
              <Button
                onClick={() =>
                  field.pushValue({
                    name: "",
                    email: "",
                    discord: "",
                    title: "",
                    isRep: field.state.value.length < 2,
                  })
                }
                variant="outline"
              >
                <MdAdd /> Add Officer
              </Button>
            </Stack>
          )}
        </form.Field>
      </Fieldset>

      <Fieldset
        legend="Tags"
        helperText="What are quick ways to describe your club?"
      >
        <form.Field name="tags" mode="array">
          {(field) => (
            <Grid gap="2" templateColumns={"repeat(4,1fr)"}>
              <For each={ClubActivities}>
                {(item) => (
                  <ClubActivity
                    key={item.value}
                    checked={field.state.value.includes(item.value)}
                    label={item.label}
                    icon={item.icon ?? <MdWidgets />}
                    onClick={() => {
                      if (!field.state.value.includes(item.value)) {
                        field.pushValue(item.value);
                      } else {
                        const index = field.state.value.indexOf(item.value);
                        if (index > -1) {
                          field.removeValue(index);
                        }
                      }
                    }}
                  />
                )}
              </For>
            </Grid>
          )}
        </form.Field>
      </Fieldset>

      <Flex justifyContent={"flex-end"} gap="4">
        <Button variant="outline">
          <MdCancel />
          Cancel
        </Button>
        <Button onClick={form.handleSubmit}>
          <MdCheck />
          Submit
        </Button>
      </Flex>
    </Stack>
  );
};

export default ClubForm;
