import {User ,Briefcase, Code} from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className={'py-24 px-4 relative'}>
            {''}
            <div className={'container mx-auto max-w-5xl'}>
                <h2 className={'text-3xl md:text-4xl font-bold mb-12 text-center'}>
                    About <span className={'text-primary'}> Me</span>
                </h2>

                <div className={'grid grid-cols-2 gap-12 items-center'}>
                    <div className={'space-y-6'}>
                        <h3 className={'text-2xl font-semibold'}>Passionate Fullstack Developer </h3>

                        <p className={'text-muted-foreground'}>
                        Fullstack Developer with over 2 years of experience, specializing in backend development with Java and Spring Boot to create robust systems and scalable APIs. 
                        I complement this expertise by building responsive, accessible, and performant web applications on the frontend with React, Angular, and Tailwind.
                        </p>

                        <p className={'text-muted-foreground'}>
                            I'm passionate about creating elegant solutions to complex problems,
                            and i'm constantly learning new technologies and techniques to stay at the forefront of
                            the ever-evolving web landscape.
                        </p>

                        <div className={'flex flex-col sm:flex-row gap-4 pt-4 justify-center'}>
                            <a href="#contact" className={'cosmic-button'}>
                                {''}
                                Get in Touch
                            </a>

                            <a
                                href="/public/AndreasCurriculum.pdf"
                               className={'px-6 py-4 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration/300'}
                            >
                                {''}
                                Download CV here
                            </a>
                        </div>

                    </div>

                    <div className={'grid grid-cols-1 gap-6'}>
                        <div className={'gradient-border p-6 card-hover'}>
                            <div className={'flex items-start gap-4'}>
                                <div className={'p-3 rounded-full bg-primary/10'}>
                                    <Code className={'h-6 w-6 text-primary'}/>
                                </div>
                                <div className={'text-left'}>
                                    <h4 className={'font-semibold text-lg '}>Fullstack Development</h4>
                                    <p className={'text-muted-foreground'}>
                                        Creating strong , robust , scalable and responsive web applications and api's with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'gradient-border p-6 card-hover'}>
                            <div className={'flex items-start gap-4'}>
                                <div className={'p-3 rounded-full bg-primary/10'}>
                                    <User className={'h-6 w-6 text-primary'}/>
                                </div>
                                <div className={'text-left'}>
                                    <h4 className={'font-semibold text-lg '}>UI/UX Design</h4>
                                    <p className={'text-muted-foreground'}>
                                        Designing intuitive user interfaces and seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'gradient-border p-6 card-hover'}>
                            <div className={'flex items-start gap-4'}>
                                <div className={'p-3 rounded-full bg-primary/10'}>
                                    <Briefcase className={'h-6 w-6 text-primary'}/>
                                </div>
                                <div className={'text-left'}>
                                    <h4 className={'font-semibold text-lg '}>Project Management </h4>
                                    <p className={'text-muted-foreground'}>
                                        Leading projects from conception to completion with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}