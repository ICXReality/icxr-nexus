import React from "react";
import { useNexusFormContext } from "./NexusForm";
import { Button } from "@chakra-ui/react";

type NexusSubmitButtonProps = {
  children?: React.ReactNode;
};

const NexusSubmitButton: React.FC<NexusSubmitButtonProps> = ({ children }) => {
  const form = useNexusFormContext();
  return (
    <form.Subscribe
      selector={(state) => [
        state.isValid,
        state.isSubmitting,
        state.isPristine,
      ]}
    >
      {([isValid, isSubmitting, isPristine]) => (
        <Button
          type="submit"
          disabled={isPristine || !isValid}
          loading={isSubmitting}
        >
          {children ?? "Submit"}
        </Button>
      )}
    </form.Subscribe>
  );
};

export default React.memo(NexusSubmitButton);
