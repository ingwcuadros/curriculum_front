
// src/app/[locale]/layout.tsx

import { RecaptchaWrapper } from '@/components/contact/RecaptchaWrapper';


type Props = {
    children: React.ReactNode;
};


export default async function ContactLayout({ children }: Props) {

    return (
        <RecaptchaWrapper>
            {children}

        </RecaptchaWrapper>

    );
}

