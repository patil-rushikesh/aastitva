"use client";

import React, { useState, useMemo } from "react";
import { Calendar, Clock, Heart, Send, Loader2, CheckCircle2, ArrowLeft, ShieldAlert, Award, User, Phone, MapPin } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Schedule Data
const CAMP_SCHEDULE = [
    { id: "Balaji-Law-College", date: "2026-07-25", label: "Balaji Law College (BLC), Pune" },
    { id: "Mayur-Samruddi", date: "2026-07-26", label: "Mayur Samruddi Housing Society, Dattawadi, Akurdi, Pune" },
    { id: "K-Ville" , date: "2026-07-26", label: "K-Ville Society, Kiwale, Pune" },
];

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Don't Know"];

export default function BloodDonationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form Field States
    const [fullName, setFullName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [whatsapp, setWhatsapp] = useState<string>("");
    const [bloodGroup, setBloodGroup] = useState<string>("");
    const [donationDate, setDonationDate] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    // Real-time Age Validation
    const ageInfo = useMemo(() => {
        if (!dob || dob.length !== 10) return { age: 0, isEligible: true };

        // Parse DD/MM/YYYY
        const [day, month, year] = dob.split('/').map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();

        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - (month - 1);

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) {
            calculatedAge--;
        }

        return { age: calculatedAge, isEligible: calculatedAge >= 18 };
    }, [dob]);

    // Filter locations based on tapped date
    const filteredVenues = useMemo(() => {
        if (!donationDate) return [];
        return CAMP_SCHEDULE.filter(item => item.date === donationDate);
    }, [donationDate]);

    // Overall form validity check
    const isFormValid = fullName.trim() !== "" && dob !== "" && ageInfo.isEligible && whatsapp.length === 10 && bloodGroup !== "" && donationDate !== "" && location !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);
        try {
            const payload = { fullName, dob, whatsapp, bloodGroup, donationDate, location };
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Network failure');

            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again. / काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setIsSuccess(false);
        setFullName(""); setDob(""); setWhatsapp(""); setBloodGroup(""); setDonationDate(""); setLocation("");
    };

    return (
        <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-slate-950">
            <div className="max-w-3xl mx-auto space-y-8 relative z-10">

                {/* Back to Home Navigation */}
                <div className="flex justify-start">
                    <Link href="/">
                        <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground rounded-xl transition-all -ml-4">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Home / मुख्य पृष्ठ</span>
                        </Button>
                    </Link>
                </div>

                {/* Detailed Hero & Description Section */}
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

                    <div className="mt-8 bg-red-50 dark:bg-red-950/30 p-6 rounded-2xl border border-red-100 dark:border-red-900 transition-all hover:shadow-md">
                        <p className="text-red-700 dark:text-red-400 font-medium sm:text-lg mb-2">
                            Your one unit of blood can save three lives. <br />
                            तुमच्या एका रक्ताच्या युनिटमुळे तीन जीव वाचू शकतात.
                        </p>
                        <p className="text-sm text-red-600/80 dark:text-red-400/80">
                            Join us in this noble cause. / या पुण्यकार्याचा भाग व्हा.
                        </p>
                    </div>
                </div>

                {/* Success State */}
                {isSuccess ? (
                    <Card className="border-green-500/30 shadow-xl text-center p-8 rounded-3xl bg-green-50/50 dark:bg-green-950/20">
                        <CardContent className="pt-6 flex flex-col items-center space-y-4">
                            <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-full">
                                <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Registration Confirmed! / नोंदणी यशस्वी!</h3>
                            <p className="text-muted-foreground max-w-md">
                                Thank you for your noble contribution. We look forward to seeing you at your selected venue.
                            </p>
                            <Button onClick={resetForm} variant="outline" className="rounded-xl mt-4">
                                Register Another Donor
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    /* Main Form */
                    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>

                        {/* Section 1: Personal Details */}
                        <Card className="rounded-3xl shadow-sm border-border overflow-hidden">
                            <CardHeader className="bg-slate-50 dark:bg-slate-800/50 border-b border-border py-4">
                                <CardTitle className="text-lg font-bold flex items-center gap-2">
                                    <User className="w-5 h-5 text-primary" /> 1. Personal Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold">Full Name | पूर्ण नाव *</Label>
                                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" className="py-6 rounded-xl bg-slate-50/50 focus-visible:ring-primary" required />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold">WhatsApp No. | मोबाईल क्र. *</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                                        <Input type="tel" maxLength={10} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value.replace(/[^0-9]/g, ''))} placeholder="10-digit number" className="py-6 pl-10 rounded-xl bg-slate-50/50 focus-visible:ring-primary" required />
                                    </div>
                                </div>
                                {/* Date of Birth */}
                                <div className="space-y-2 sm:col-span-2">
                                    <Label className="text-sm font-semibold flex items-center justify-between">
                                        <span>Date of Birth (DD/MM/YYYY) | जन्म तारीख *</span>
                                        {!ageInfo.isEligible && dob && dob.length === 10 && (
                                            <span className="text-xs text-red-500 font-bold flex items-center gap-1">
                                                <ShieldAlert className="w-3 h-3" /> Must be 18+
                                            </span>
                                        )}
                                    </Label>
                                    <Input
                                        type="text"
                                        maxLength={10}
                                        placeholder="DD/MM/YYYY"
                                        value={dob}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/[^0-9]/g, '');
                                            // Auto-format DD/MM/YYYY
                                            if (value.length > 4) value = value.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
                                            else if (value.length > 2) value = value.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                            setDob(value);
                                        }}
                                        className={`py-6 rounded-xl bg-slate-50/50 focus-visible:ring-primary ${!ageInfo.isEligible && dob.length === 10 ? 'border-red-500 ring-red-500/20' : ''}`}
                                        required
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Section 2: Medical Details (One-Tap Grid) */}
                        <Card className="rounded-3xl shadow-sm border-border overflow-hidden">
                            <CardHeader className="bg-slate-50 dark:bg-slate-800/50 border-b border-border py-4">
                                <CardTitle className="text-lg font-bold flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-red-500 fill-red-500" /> 2. Blood Group | रक्तगट *
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                                    {BLOOD_GROUPS.map((bg) => (
                                        <button
                                            key={bg}
                                            type="button"
                                            onClick={() => setBloodGroup(bg)}
                                            className={`py-3 px-2 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${bloodGroup === bg
                                                ? 'bg-red-500 border-red-500 text-white shadow-md scale-105'
                                                : 'bg-white dark:bg-slate-900 border-border text-foreground hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/30'
                                                } ${bg === "Don't Know" ? 'col-span-3 sm:col-span-2' : ''}`}
                                        >
                                            {bg === "Don't Know" ? "Don't Know" : bg}
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Section 3: Camp Selection (One-Tap Date Cards) */}
                        <Card className="rounded-3xl shadow-sm border-border overflow-hidden">
                            <CardHeader className="bg-slate-50 dark:bg-slate-800/50 border-b border-border py-4">
                                <CardTitle className="text-lg font-bold flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" /> 3. Select Venue | ठिकाण *
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">

                                {/* Date Selection Cards */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-muted-foreground">Select a Date</Label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        <button
                                            type="button"
                                            onClick={() => { setDonationDate("2026-07-25"); setLocation(""); }}
                                            className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${donationDate === "2026-07-25" ? 'bg-primary/10 border-primary shadow-sm' : 'bg-white dark:bg-slate-900 border-border hover:border-primary/40'
                                                }`}
                                        >
                                            <div className={`p-3 rounded-full ${donationDate === "2026-07-25" ? 'bg-primary text-primary-foreground' : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground'}`}>
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-base">Sat, 25th July</p>
                                                <p className="text-xs text-muted-foreground">Day 1</p>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => { setDonationDate("2026-07-26"); setLocation(""); }}
                                            className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${donationDate === "2026-07-26" ? 'bg-primary/10 border-primary shadow-sm' : 'bg-white dark:bg-slate-900 border-border hover:border-primary/40'
                                                }`}
                                        >
                                            <div className={`p-3 rounded-full ${donationDate === "2026-07-26" ? 'bg-primary text-primary-foreground' : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground'}`}>
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-base">Sun, 26th July</p>
                                                <p className="text-xs text-muted-foreground">Kargil Diwas</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Venue Selection Dropdown (Only enables after date is selected) */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-muted-foreground">Select a Venue</Label>
                                    <Select value={location} onValueChange={setLocation} disabled={!donationDate}>
                                        <SelectTrigger className={`py-6 rounded-xl text-base ${!donationDate ? 'bg-slate-100 dark:bg-slate-800 opacity-60' : 'bg-white dark:bg-slate-900 focus:ring-primary border-2 border-primary/20 hover:border-primary/50'}`}>
                                            <SelectValue placeholder={donationDate ? "Choose location..." : "Please select a date first"} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {filteredVenues.map((v) => (
                                                <SelectItem key={v.id} value={v.id} className="py-3 cursor-pointer">
                                                    {v.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Submit Action */}
                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={!isFormValid || isSubmitting}
                                className="w-full py-7 text-lg rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-xl shadow-red-600/20 disabled:shadow-none disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-500 transition-all duration-300"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</span>
                                ) : (
                                    <span className="flex items-center gap-2">Confirm Registration <Send className="w-5 h-5" /></span>
                                )}
                            </Button>
                            {!isFormValid && (
                                <p className="text-center text-xs text-muted-foreground mt-3 font-medium">
                                    Please fill out all required fields and ensure you are 18+ to proceed.
                                </p>
                            )}
                        </div>

                    </form>
                )}
            </div>
        </main>
    );
}