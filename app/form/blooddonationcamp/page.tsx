import { Metadata } from "next";
import DonationForm from "@/components/donation-form";


export const metadata: Metadata = {
    title: "Blood Donation Camp 2026 | Aastitva Foundation",
    description: "Register for the Aastitva Foundation blood donation camp on 25th and 26th July 2026.",
    keywords: ["blood donation", "blood donation camp", "Aastitva Foundation", "registration"],
    openGraph: {
        title: "Blood Donation Camp 2026 | Aastitva Foundation",
        description: "Register for the Aastitva Foundation blood donation camp on 25th and 26th July 2026.",
        images: [
            {
                url: "/blooddonation.jpeg", 
                width: 1200,
                height: 630,
                alt: "Aastitva Foundation Blood Donation Camp 2026 Banner",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blood Donation Camp 2026 | Aastitva Foundation",
        description: "Register for the Aastitva Foundation blood donation camp on 25th and 26th July 2026.",
        images: ["/blooddonation.jpeg"], 
    },
};

export default function BloodDonationCampPage() {
    return <DonationForm />;
}