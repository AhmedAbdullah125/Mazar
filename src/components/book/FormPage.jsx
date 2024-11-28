'use client'
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import ReCAPTCHA from "react-google-recaptcha"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import validator from "validator";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { motion } from 'framer-motion'; // Importing the motion component from Framer Motion for animations
import axios from 'axios';
import Loading from '@/app/loading';
export default function FormPage(props) {
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState('en');  // Default language is 'en'
    useEffect(() => {
        setLoading(true);
        if (typeof window !== 'undefined') {
            setLanguage(localStorage.getItem('lang'));
            // Define the headers with the selected language
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
            // Fetch data from the API with Axios
            axios.get('https://mzarapp.com/api/landing/home/packages'
                , {
                    headers: headers,
                }).then(response => {
                    setData(response.data);  // Set the response data to state
                    setLoading(false);  // Set loading to false

                })
                .catch(error => {
                    setError(error);  // Handle any errors
                    console.error('Error fetching data:', error);
                    setLoading(false)
                });
        }
    }, []);  // Run this effect whenever the `language` changes
    console.log(data);
    const router = useRouter()

    let setDone = props.setDone;
    console.log(props);
    // const [date, setDate] = React.useState<Date>()
    const [date, setDate] = useState(new Date());
    const [visited, setVisited] = useState(false);
    const [captchaa, setCaptchaa] = useState(false);
    function onChange(value) {
        setCaptchaa(true);
        console.log(captchaa);

    }
    const formSchema = z
        .object({
            // password: z
            //     .string()
            //     .min(8, { message: "Password must be at least 8 characters" })
            //     .max(20, { message: "Password must be at most 20 characters" })
            //     .regex(new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/),
            //         {
            //             message: "Password must contain at least one letter, one number, and one special character",
            //         }
            //     ),
            // confirm: z.string(),
            name: z.string().min(1, { message: "Name is required" }).max(50, { message: "Name must be at most 50 characters" }),
            phone: z.string().refine(validator.isMobilePhone, { message: "Invalid phone number" }),
            date: z.date(),
            destniation: z.string().min(1, { message: "Destniation is required" }),
            // captcha: z.string(captchaa).min(1, { message: "Captcha is required" }),
            // captcha: z.boolean({
            //     required_error: "isActive is required",
            //     invalid_type_error: "isActive must be a boolean",
            // })
        })
    // .refine((data) => data.password === data.confirm, {
    //     message: "Passwords do not match",
    //     path: ['confirm'],
    // });
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // password: '',
            // confirm: '',
            name: '',
            phone: '',
            date: date,
            destniation: '',
            // captcha: '',
        },
    });
    const Submit = (data) => {
        setVisited(true);
        if (captchaa) {
            console.log("ffffffff");
            let formData = `${data.date.getDate()}-${data.date.getMonth() + 1}-${data.date.getFullYear()}`;
            // try {
            //     // Call your API with form data
            //     const response = await fetch(`https://mzarapp.com/api/landing/home/booking?customer_name=${data.name}&customer_whatsapp=${data.phone}&package_id=${data.destniation}&package_name=${data.destniation}&booking_date=${formData}`, {
            //       method: 'POST',
            //       headers: {
            //         'Content-Type': 'application/json',
            //       },
            //       body: JSON.stringify(data),
            //     });

            //     const data = await response.json();
            //     console.log('Response from API:', data);
            //   } catch (error) {
            //     console.error('Error submitting form:', error);
            //   }

            console.log(data);


            setDone(true);
            document.querySelector('html').style.overflow = 'hidden';
            const interval = setInterval(() => {
                setDone(false);
                document.querySelector('html').style.overflow = 'auto';
                router.push('/');
                clearInterval(interval);
            }, 3000);

        }
    };
    return (
        loading ? <div className="w-full"><Loading /> </div> :
            <motion.div
                initial={{ opacity: 0, x: 300 }} // Initial animation state (faded and shifted left)
                whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                viewport={{ once: true }}
                transition={{
                    delay: 0.2,
                    // type: 'spring', // Using spring animation for smooth motion
                    bounce: 0.2, // Small bounce effect for the animation
                }}
                className='w-full form'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(Submit)} >
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.3,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="nameLabel"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <FormLabel>Name</FormLabel>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.3,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="name"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="EX: mohamed yaocub"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='form-message' />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.4,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="whatsapp"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <FormLabel>Whats app number</FormLabel>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.4,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="phone"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="tel"
                                                placeholder="Your whats app number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='form-message' />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="whatsapp"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <FormLabel>Destniation (optional)</FormLabel>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="destniation"
                                render={({ field }) => (
                                    <FormItem >
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl className="date-picker">
                                                <SelectTrigger className="w-full">
                                                    <FormLabel className="date-btn">
                                                        <SelectValue placeholder="Destniation" />
                                                    </FormLabel>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Heraa</SelectLabel>
                                                    {data.data.packages.map((packageItem, index) => (
                                                        <SelectItem value={packageItem.id}>{packageItem.name}</SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className='form-message' />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.6,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="whatsapp"
                                className='w-full'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <FormLabel>Arrive date (optional)</FormLabel>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation state (faded and shifted left)
                            whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.6,
                                // type: 'spring', // Using spring animation for smooth motion
                                bounce: 0.2, // Small bounce effect for the animation
                            }}>
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem className=" date-picker">
                                        <Select defaultValue={field.value}>
                                            <FormControl>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full justify-start text-left font-normal shadow-none ",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon />
                                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                            <SelectContent >

                                            </SelectContent>
                                        </Select>
                                        <FormMessage className='form-message' />
                                    </FormItem>
                                )}
                            />
                        </motion.div>

                        {/* <FormField
                    control={form.control}
                    name="password"
                    className='w-full'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmLable"
                    className='w-full'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <FormLabel>Confirm Password</FormLabel>

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirm"
                    className='w-full'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder={"Confirm Password"}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                        <div className='captcha'>
                            <ReCAPTCHA sitekey="6Lc3A4oqAAAAALKG0Ww3vyaaIdmMWIAjXIi6xvoa" onChange={onChange} />
                            <p className={`${!captchaa && visited ? 'block' : 'hidden'} captcha-text`}>Please verify that you are not a robot</p>
                        </div>

                        <Button type="submit" className='text-xl py-4 rounded-xl min-w-32 h-13 submit'>Submit</Button>
                    </form>
                </Form>
            </motion.div>
    );
}
