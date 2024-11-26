'use client'
import React, { useState } from 'react';
import { Input } from '../ui/input';
import ReCAPTCHA from "react-google-recaptcha"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import validator from "validator";
import { format } from 'date-fns';
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
import { Calendar } from '@/components/ui/calendar';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion'; // Importing the motion component from Framer Motion for animations
export default function FormPage(props) {
    const router = useRouter()






    let setDone = props.setDone;
    console.log(props);

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
                                                <SelectItem value="1">Heraa</SelectItem>
                                                <SelectItem value="2">Thawr</SelectItem>
                                                <SelectItem value="3">Mount wall</SelectItem>
                                                <SelectItem value="4">Makkah</SelectItem>
                                                <SelectItem value="5">Medina</SelectItem>
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
                                            <SelectTrigger className="w-full border-none text-lg">
                                                {/* <FormLabel className="text-lg font-semibold">
                                            Arrive date (optional)
                                            </FormLabel> */}
                                                <div className="date-btn">{format(date, "PPP")} </div>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent >
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                onDayClick={field.onChange}
                                                initialFocus
                                                disabled={{ before: new Date() }}
                                            />
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
