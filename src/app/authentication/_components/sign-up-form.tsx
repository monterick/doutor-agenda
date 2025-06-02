"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { authClient } from "@/lib/auth-client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const registerSchema = z.object({
    name: z.string().trim().min(1, {message: "Nome é obrigatório"}),
    email: z.string().trim().min(1, {message: "E-mail é obrigatório"}).email({message: "E-mail inválido"}),
    password: z.string().trim().min(8, {message: "Senha deve ter pelo menos 8 caracteres"}),
});

type RegisterSchema = z.infer<typeof registerSchema>;


const SignUpForm = () => {

    const router = useRouter();

     const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
         name: "",
         email: "",
         password: "",
        },
    })

    async function onSubmit(values: RegisterSchema) {
        //console.log(values)
        await authClient.signUp.email({
            email: values.email,
            password: values.password,
            name: values.name,
            callbackURL: "/dashboard"
        },{
            onSuccess: () => {
                router.push("/dashboard")
            },
            onError: (ctx) => {
                if(ctx.error.code === 'USER_ALREADY_EXISTS'){
                    toast.error("E-mail já cadastrado.")
                    return;
                }
                toast.error("Erro ao criar a conta");
            }
        })
    }

    return(
        <Card>
            <CardHeader>
                <CardTitle>Criar Conta</CardTitle>
                <CardDescription>
                Crie uma conta para continuar.
                </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-4">
                <CardContent className="space-y-2">
                
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite o seu nome..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite o seu email..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input  placeholder="Digite sua senha..." 
                                    type="password"
                                    {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            
                        )}
                        />
                    
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        { form.formState.isSubmitting ? (
                            <Loader2  className="mr-2 h-4 w-4 animate-spin" />
                        ) :
                        ("Criar conta") }
                    </Button>
                </CardFooter>
            </form>
                </Form>
            </Card>
    )

}

export default SignUpForm;