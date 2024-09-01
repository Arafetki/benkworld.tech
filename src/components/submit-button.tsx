"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps extends ButtonProps {
    formId: string
    label: string
    pendingLabel: string
    formIsValid: boolean
    startContent?: React.ReactNode
}

export function SubmitButton({formId, label, pendingLabel, startContent, formIsValid, ...rest}: SubmitButtonProps) {

    const {pending} = useFormStatus()

    return (
        <Button
            type="submit"
            form={formId}
            disabled={pending || !formIsValid}
            className="flex items-center gap-3"
            {...rest}
        >
            {startContent}
            {pending? pendingLabel: label}
        </Button>
    );
}