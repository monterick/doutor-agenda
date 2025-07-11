import { PageContainer, PageContent, PageDescription, PageHeader, PageHeaderContent, PageTitle } from "@/components/ui/page-container";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SubscriptionPlan } from "./_components/subscription-pan";

const SubscriptionPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if(!session?.user){
        redirect("/authentication");
    }

    if (!session.user.clinic) {
        redirect("/clinic-form");
    }

    return(
        <PageContainer>
            <PageHeader>
                <PageHeaderContent>
                <PageTitle>Assinatura</PageTitle>
                <PageDescription>Gerencie a sua assinatura.</PageDescription>
                </PageHeaderContent>
            </PageHeader>
            <PageContent>
                <SubscriptionPlan
                className="w-[350px]"
                //active={session.user.plan === "essential"}
                userEmail={session.user.email}
                />
            </PageContent>
        </PageContainer>
    )
}

export default SubscriptionPage;