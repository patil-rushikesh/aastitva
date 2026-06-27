"use client";

import React, { useState } from "react";
import { Award, Heart, Calendar, Clock, CheckCircle2, ArrowLeft, Building2, UserCircle, Hash } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SocietyRegistrationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form Field States
    const [societyName, setSocietyName] = useState("");
    const [inchargeName, setInchargeName] = useState("");
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [primaryContact, setPrimaryContact] = useState("");
    const [altContact, setAltContact] = useState("");
    const [expectedCount, setExpectedCount] = useState("");
    const [location, setLocation] = useState("");

    const isFormValid =
        societyName.trim() !== "" &&
        inchargeName.trim() !== "" &&
        primaryContact.length === 10 &&
        altContact.length === 10 &&
        expectedCount !== "" &&
        location.trim() !== "" &&
        selectedDate !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);
        try {
            const payload = { societyName, inchargeName, primaryContact, altContact, expectedCount, location, selectedDate };
            const response = await fetch('/api/register-society', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Network failure');
            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error(error);
            alert("Something went wrong. / काहीतरी चूक झाली.");
        } finally {
            setIsSubmitting(false);
        }
    };
    const resetForm = () => {
        setIsSuccess(false);
        setSocietyName(""); setInchargeName(""); setPrimaryContact(""); setAltContact(""); setExpectedCount(""); setLocation(""); setSelectedDate("");
    };

    return (
        <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-slate-950">
            <div className="max-w-3xl mx-auto space-y-8 relative z-10">

                {/* Back Navigation */}
                <Link href="/">
                    <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground -ml-4">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Button>
                </Link>
                <div className="glossy rounded-3xl p-8 sm:p-10 text-center animate-fade-in-up shadow-sm border border-white/20" style={{ animationDelay: "0.1s" }}>

                    {/* Kargil Vijay Diwas Special Tribute Header */}
                    <div className="mb-8 flex flex-col items-center justify-center border-b border-orange-500/20 pb-8 bg-gradient-to-r from-orange-500/5 via-white/0 to-green-500/5 rounded-2xl p-6">
                        <div className="bg-amber-500/10 p-3 rounded-full mb-4 ring-2 ring-amber-500/20">
                            <Award className="w-8 h-8 text-amber-600 dark:text-amber-500 animate-bounce" />
                        </div>
                        <h3 className="text-sm font-bold tracking-widest text-orange-600 dark:text-orange-400 uppercase">
                            On the Occasion of Kargil Vijay Diwas
                        </h3>
                        <h3 className="text-lg font-bold tracking-wide text-green-700 dark:text-green-400 mt-1">
                            कारगील विजय दिनानिमित्त पावन उपक्रम
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-lg mt-3 italic leading-relaxed">
                            "Our soldiers shed blood to secure our borders. Let us donate blood to honor their legacy and save our fellow citizens." <br />
                            "आपल्या जवानांनी सीमेवर रक्ताचे पाणी केले, चला आपण रक्तदान करून त्यांच्या शौर्याला नमन करूया आणि देशबांधवांचे प्राण वाचवूया!"
                        </p>
                    </div>

                    <div className="flex justify-center mb-6">
                        <div className="bg-primary/10 p-4 rounded-full">
                            <Heart className="w-10 h-10 text-primary animate-pulse" strokeWidth={2} />
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                        Blood Donation Camp
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-8">
                        रक्तदान शिबिर २०२६
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

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-y border-border py-8">
                        <div className="flex items-center space-x-4 bg-background/80 p-5 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                            <Calendar className="w-7 h-7 text-primary flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-sm">25th & 26th July 2026</p>
                                <p className="text-xs text-muted-foreground mt-1">२५ आणि २६ जुलै २०२६</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-background/80 p-5 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                            <Clock className="w-7 h-7 text-primary flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-sm">9:00 AM to 2:00 PM</p>
                                <p className="text-xs text-muted-foreground mt-1">सकाळी ९:०० ते दुपारी २:००</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Header */}
                <div className="glossy rounded-3xl p-8 sm:p-10 text-center shadow-xl border border-white/20 bg-white/50 backdrop-blur-md">
                    <div className="flex justify-center mb-6">
                        <div className="bg-primary/10 p-4 rounded-full border border-primary/20">
                            <Building2 className="w-8 h-8 text-primary" />
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
                        Society / Institution Registration
                    </h1>
                    <h2 className="text-xl text-primary font-medium">
                        सोसायटी / संस्था नोंदणी
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                        Host a life-saving blood donation camp in your premises. <br />
                        तुमच्या परिसरात रक्तदान शिबिर आयोजित करण्यासाठी नोंदणी करा.
                    </p>
                </div>

                {isSuccess ? (
                    <Card className="border-green-500/30 shadow-xl text-center p-8 rounded-3xl bg-green-50/50 dark:bg-green-950/20">
                        <CardContent className="pt-6 flex flex-col items-center space-y-4">
                            <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-full">
                                <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Registration Confirmed! / नोंदणी यशस्वी!</h3>
                            <p className="text-muted-foreground max-w-md">
                                Our team will contact you shortly to finalize the details of your blood donation camp. <br />
                            </p>
                            <Button onClick={resetForm} variant="outline" className="rounded-xl mt-4">
                                Register Another Society
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <Card className="rounded-3xl shadow-sm">
                            <CardHeader className="bg-slate-50 py-4 border-b">
                                <CardTitle className="text-lg flex items-center gap-2"><Building2 className="w-5 h-5" /> 1. Organization Details</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2 sm:col-span-2">
                                    <Label>Society/Institution Name *</Label>
                                    <Input value={societyName} onChange={(e) => setSocietyName(e.target.value)} className="py-6 rounded-xl" required />
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <Label>Full Address | ठिकाण *</Label>
                                    <Input value={location} onChange={(e) => setLocation(e.target.value)} className="py-6 rounded-xl" placeholder="Full address of premises" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Expected Donor Count | अपेक्षित संख्या *</Label>
                                    <div className="relative">
                                        <Hash className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                                        <Input type="number" value={expectedCount} onChange={(e) => setExpectedCount(e.target.value)} className="py-6 pl-10 rounded-xl" placeholder="e.g. 50" required />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="rounded-3xl shadow-sm border-border">
                            <CardHeader className="bg-slate-50 py-4 border-b">
                                <CardTitle className="text-lg font-bold">Select Date | दिनांक निवडा *</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setSelectedDate("2026-07-25")}
                                    className={`p-4 rounded-2xl border-2 transition-all text-left ${selectedDate === "2026-07-25" ? "border-primary bg-primary/5" : "border-border"}`}
                                >
                                    <p className="font-bold">Sat, 25th July 2026</p>
                                    <p className="text-sm text-muted-foreground">Day 1</p>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedDate("2026-07-26")}
                                    className={`p-4 rounded-2xl border-2 transition-all text-left ${selectedDate === "2026-07-26" ? "border-primary bg-primary/5" : "border-border"}`}
                                >
                                    <p className="font-bold">Sun, 26th July 2026</p>
                                    <p className="text-sm text-muted-foreground">Kargil Diwas</p>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedDate("Not Sure Yet!")}
                                    className={`p-4 rounded-2xl border-2 transition-all text-left ${selectedDate === "Not Sure Yet!" ? "border-primary bg-primary/5" : "border-border"}`}
                                >
                                    <p className="font-bold">Not Sure Yet!</p>
                                </button>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-sm">
                            <CardHeader className="bg-slate-50 py-4 border-b">
                                <CardTitle className="text-lg flex items-center gap-2"><UserCircle className="w-5 h-5" /> 2. Contact Person</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2 sm:col-span-2">
                                    <Label>In-charge Name | प्रभारी व्यक्तीचे नाव *</Label>
                                    <Input value={inchargeName} onChange={(e) => setInchargeName(e.target.value)} className="py-6 rounded-xl" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Primary Contact | मुख्य संपर्क *</Label>
                                    <Input type="tel" maxLength={10} value={primaryContact} onChange={(e) => setPrimaryContact(e.target.value.replace(/[^0-9]/g, ''))} className="py-6 rounded-xl" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Alternative Contact | पर्यायी संपर्क</Label>
                                    <Input type="tel" maxLength={10} value={altContact} onChange={(e) => setAltContact(e.target.value.replace(/[^0-9]/g, ''))} className="py-6 rounded-xl" />
                                </div>
                            </CardContent>
                        </Card>

                        <Button type="submit" disabled={!isFormValid || isSubmitting} className="w-full py-7 text-lg rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-xl">
                            {isSubmitting ? "Submitting..." : "Submit Registration Request"}
                        </Button>
                    </form>
                )}
            </div>
        </main>
    );
}