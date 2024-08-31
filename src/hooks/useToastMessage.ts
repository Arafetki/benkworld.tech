import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import type { FormState } from "@/app/actions/send-message";

export function useToastMessage(formState: FormState) {

    const {toast} = useToast();

    useEffect(()=>{

        if (formState.success) {
            toast({
                description: 'Message sent sucessfully!',
            })
        } else {
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
            })
        }

    },[formState.success]);

}