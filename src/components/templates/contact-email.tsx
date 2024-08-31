type ContactEmailTemplateProps = {
    name: string
    message: string
}

export function ContactEmailTemplate({name,message}: ContactEmailTemplateProps) {

    return (
        <div>
            <h1>Hi from, {name}</h1>
            <p>{message}</p>
        </div>
    );

}