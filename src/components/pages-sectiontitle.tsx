import type { ISectionTitle } from "../../types";
import CustomIcon from "./custom-icon";
import AnimatedContent from "./animated-content";

export default function PagesSectionTitle({ icon, title, subtitle, dir = 'center' }: ISectionTitle) {
    return (
        <div className={`px-4 lg:px-20 w-full flex flex-col gap-6 ${dir === 'left' ? 'items-center' : 'md:items-start items-center'}`}>
            <AnimatedContent className="flex flex-col md:flex-row items-center gap-4">
                <CustomIcon icon={icon} />
                <h2 className="text-3xl lg:text-4xl font-semibold font-urbanist">{title}</h2>
            </AnimatedContent>
            <AnimatedContent>
                <p className={`text-zinc-500 text-base/7 ${dir === 'left' ? 'text-center max-w-lg' : 'md:text-left max-w-4xl'}`}>{subtitle}</p>
            </AnimatedContent>
        </div>
    )
}