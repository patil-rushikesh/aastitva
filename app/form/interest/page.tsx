"use client";

import React, { useState } from "react";
// 1. Added ArrowLeft to the lucide-react imports
import { Calendar, Clock, Heart, Send, Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
// 2. Added Link import from next/link
import Link from "next/link";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function BloodDonationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // State for controlled Select components to allow resetting
    const [bloodGroup, setBloodGroup] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create the payload from our form state
            const payload = {
                fullName: (e.currentTarget.elements.namedItem('fullName') as HTMLInputElement).value,
                bloodGroup, // from the state variable
                whatsapp: (e.currentTarget.elements.namedItem('whatsapp') as HTMLInputElement).value,
                location,   // from the state variable
            };

            // Send the POST request to our new API route
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // On success, trigger the success UI and scroll up
            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again. / काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setIsSuccess(false);
        setBloodGroup("");
        setLocation("");
    };

    return (
        <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 page-fade-in relative">
            <div className="max-w-3xl mx-auto space-y-6 relative z-10">

                {/* 3. Back to Home Button */}
                <div className="flex justify-start animate-fade-in-up">
                    <Link href="/">
                        <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground rounded-xl transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="font-medium">Back to Home / मुख्य पृष्ठावर परत जा</span>
                        </Button>
                    </Link>
                </div>

                {/* Header / Hero Section */}
                <div className="glossy rounded-2xl p-8 sm:p-10 text-center animate-fade-in-up shadow-xl border border-white/20" style={{ animationDelay: "0.1s" }}>
                    <div className="flex justify-center mb-6">
                        <div className="bg-primary/10 p-4 rounded-full">
                            <Heart className="w-10 h-10 text-primary animate-pulse" strokeWidth={2} />
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                        Blood Donation Camp <br className="sm:hidden" />
                        <span className="text-primary">27th July 2026</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6">
                        रक्तदान शिबिर <br className="sm:hidden" />
                        <span className="text-primary">२७ जुलै २०२६</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground">
                        <p className="text-lg">
                            <strong className="text-foreground">Organized by / आयोजक:</strong> Aastitva Foundation (आस्तित्व फाउंडेशन)
                        </p>
                        <p className="text-sm">
                            In collaboration with: Multiple societies and institutions <br />
                            सहयोगी संस्था: विविध सोसायट्या आणि संस्था
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
                            <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-sm">Sunday, 27th July 2026</p>
                                <p className="text-xs text-muted-foreground">रविवार, २७ जुलै २०२६</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
                            <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-sm">9:00 AM to 2:00 PM</p>
                                <p className="text-xs text-muted-foreground">सकाळी ९:०० ते दुपारी २:००</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-red-50 dark:bg-red-950/30 p-6 rounded-xl border border-red-100 dark:border-red-900 transition-all hover:shadow-md">
                        <p className="text-red-700 dark:text-red-400 font-medium sm:text-lg mb-2">
                            Your one unit of blood can save three lives. <br />
                            तुमच्या एका रक्ताच्या युनिटमुळे तीन जीव वाचू शकतात.
                        </p>
                        <p className="text-sm text-red-600/80 dark:text-red-400/80">
                            Join us in this noble cause. / या पुण्यकार्याचा भाग व्हा.
                        </p>
                    </div>
                </div>

                {/* Dynamic Form Area */}
                {isSuccess ? (
                    <Card className="animate-fade-in-up border-primary/30 shadow-lg text-center p-6" style={{ animationDelay: "0.2s" }}>
                        <CardContent className="pt-6 flex flex-col items-center">
                            <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-2">Thank You! / धन्यवाद!</h3>
                            <p className="text-muted-foreground mb-8">
                                Your participation is confirmed. We look forward to seeing you at the blood donation camp. <br />
                                तुमचा सहभाग निश्चित झाला आहे. रक्तदान शिबिरात आम्ही तुमची वाट पाहत आहोत.
                            </p>
                            <Button onClick={resetForm} variant="secondary" size="lg">
                                Submit Another Response / दुसरा प्रतिसाद नोंदवा
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="animate-fade-in-up shadow-lg border-border" style={{ animationDelay: "0.2s" }}>
                        <CardHeader className="border-b border-border mb-6 pb-6">
                            <CardTitle className="text-2xl font-bold">Registration Form / नोंदणी फॉर्म</CardTitle>
                            <CardDescription className="text-base mt-2">
                                Kindly fill out the form below to confirm your participation. <br />
                                कृपया खालील फॉर्म भरून आपली उपस्थिती नोंदवा.
                            </CardDescription>
                        </CardHeader>

                        <form onSubmit={handleSubmit} onReset={resetForm}>
                            <CardContent className="space-y-6">

                                {/* Full Name */}
                                <div className="space-y-3">
                                    <Label htmlFor="fullName" className="text-sm font-medium">
                                        Full Name | पूर्ण नाव <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        disabled={isSubmitting}
                                        placeholder="Enter your full name"
                                        className="py-6 transition-all hover:border-primary/50 focus-visible:ring-primary"
                                    />
                                </div>

                                {/* Blood Group Select */}
                                <div className="space-y-3">
                                    <Label htmlFor="bloodGroup" className="text-sm font-medium">
                                        Blood Group | रक्तगट <span className="text-destructive">*</span>
                                    </Label>
                                    <Select
                                        required
                                        disabled={isSubmitting}
                                        value={bloodGroup}
                                        onValueChange={setBloodGroup}
                                        name="bloodGroup"
                                    >
                                        <SelectTrigger className="w-full py-6 transition-all hover:border-primary/50 focus:ring-primary">
                                            <SelectValue placeholder="Select Blood Group / रक्तगट निवडा" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A+">A+</SelectItem>
                                            <SelectItem value="A-">A-</SelectItem>
                                            <SelectItem value="B+">B+</SelectItem>
                                            <SelectItem value="B-">B-</SelectItem>
                                            <SelectItem value="AB+">AB+</SelectItem>
                                            <SelectItem value="AB-">AB-</SelectItem>
                                            <SelectItem value="O+">O+</SelectItem>
                                            <SelectItem value="O-">O-</SelectItem>
                                            <SelectItem value="Dont Know">Don't Know / माहित नाही</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* WhatsApp Mobile No */}
                                <div className="space-y-3">
                                    <Label htmlFor="whatsapp" className="text-sm font-medium">
                                        Whatsapp Mobile No. | व्हॉट्सअॅप मोबाईल क्रमांक <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        required
                                        disabled={isSubmitting}
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        minLength={10}
                                        title="Please enter exactly 10 digits"
                                        placeholder="10-digit mobile number"
                                        className="py-6 transition-all hover:border-primary/50 focus-visible:ring-primary"
                                        onInput={(e) => {
                                            // Instantly remove any non-numeric characters typed
                                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                                        }}
                                    />
                                </div>

                                {/* Location Select */}
                                <div className="space-y-3">
                                    <Label htmlFor="location" className="text-sm font-medium">
                                        Donation Venue | रक्तदान ठिकाण <span className="text-destructive">*</span>
                                    </Label>
                                    <Select
                                        required
                                        disabled={isSubmitting}
                                        value={location}
                                        onValueChange={setLocation}
                                        name="location"
                                    >
                                        <SelectTrigger className="w-full py-6 transition-all hover:border-primary/50 focus:ring-primary">
                                            <SelectValue placeholder="Select Location / ठिकाण निवडा" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Kalpataru">Kalpataru Exquisite Housing Society, Kaspate Wasti, Wakad</SelectItem>
                                            <SelectItem value="Utkarsh">Utkarsh Classes, Dattawadi, Akurdi</SelectItem>
                                            <SelectItem value="Nano">Nano Homes Housing Society, Ravet</SelectItem>
                                            <SelectItem value="Saidham">Saidham Housing Society, Akurdi</SelectItem>
                                            <SelectItem value="KVille">K-Ville Housing Society, Kiwale</SelectItem>
                                            <SelectItem value="Matru">Matru Vidyalaya, Ahermagar, Chinchwad</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                            </CardContent>

                            <CardFooter className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border mt-4">
                                <Button
                                    type="reset"
                                    variant="ghost"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto text-muted-foreground"
                                >
                                    Clear form / फॉर्म पुसा
                                </Button>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    size="lg"
                                    className="w-full sm:w-auto sm:min-w-[240px] flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Submit / सबमिट करा</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                )}
            </div>
        </main>
    );
}