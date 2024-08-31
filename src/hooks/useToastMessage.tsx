import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import type { FormState } from "@/app/actions/send-message";
import { ToastAction } from "@/components/ui/toast";

export function useToastMessage(formState: FormState) {

    const {toast} = useToast();

    useEffect(()=>{

        if (formState.error) {
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
                action: <ToastAction altText="Try again">Try again</ToastAction>
            })
        } else {

            if (formState.success) {
                toast({
                    variant: 'success',
                    description: 'Message sent sucessfully!',
                })
            }
        }

    },[formState,toast]);

}