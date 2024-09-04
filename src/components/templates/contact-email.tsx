import {
  Html,
  Head,
  Preview,
  Body,
  Section,
  Heading,
  Text,
  Hr,
} from '@react-email/components';

type ContactEmailTemplateProps = {
    name: string
    message: string
    email: string
}

export function ContactEmailTemplate({name,message,email}: ContactEmailTemplateProps) {

    return (
        <Html>
            <Head />
            <Preview>You&apos;ve received a new message</Preview>
            <Body className="bg-gray-50 p-6">
            <Section className="bg-white shadow-lg p-8 max-w-full">
                <Heading className="text-2xl font-bold text-gray-800 mb-6">
                New Contact Message
                </Heading>
                <Hr className="border-gray-300 my-6" />
                <div className="mb-4">
                <Text className="text-lg font-semibold text-gray-900">Name:</Text>
                <Text className="text-lg text-gray-700">{name}</Text>
                </div>
                <div className="mb-4">
                <Text className="text-lg font-semibold text-gray-900">Email:</Text>
                <Text className="text-lg text-gray-700">{email}</Text>
                </div>
                <div>
                <Text className="text-lg font-semibold text-gray-900">Message:</Text>
                <Text className="text-lg text-gray-700 whitespace-pre-wrap bg-gray-100 p-4 rounded-lg border border-gray-200">
                    {message}
                </Text>
                </div>
                <Hr className="border-gray-300 my-6" />
                <Text className="text-sm text-gray-500">
                This message was sent from your website&apos;s contact form.
                </Text>
            </Section>
            </Body>
        </Html>
    );

}