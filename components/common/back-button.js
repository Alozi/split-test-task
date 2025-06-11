'use client';

import { useRouter } from 'next/navigation'

import LinkWithIcon from "@/components/common/link-with-icon";
import ArrowBackIcon from '@/public/icons/arrow-back.svg';

export default function BackButton() {
    const router = useRouter();

    return <LinkWithIcon href="#" icon={ArrowBackIcon} title="Back" onClick={() => router.back()} />
}