import HowItWorks from "./HowItWorks";
import ImpactCounter from "./ImpactCounter";
import StoriesOfImpacts from "./StoriesOfImpacts";
import UrgentDonation from "./UrgentDonation";

const Main = () => {
    return (
        <div>
            <ImpactCounter></ImpactCounter>
            <HowItWorks></HowItWorks>
            <StoriesOfImpacts></StoriesOfImpacts>
            <UrgentDonation></UrgentDonation>
        </div>
    );
};

export default Main;