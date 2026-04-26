"use client"

import Image from 'next/image';

export default function AboutContent() {
    return (
        <div>
            <div className="px-6 py-24 mx-4 lg:mx-40">
                <span className="mt-80 font-bold text-4xl">
                    About
                </span>
                <div className="mr-4 lg:mr-40">
                    <div className="mt-12">
                        Caroline Miller is a software engineer and musician living in the windy city of Chicago, Illinois. Born and raised by the foothills in the Rocky Mountains of Colorado, Caroline began studying music at a young age, which would later become crucial to her expertise and perspective as a software engineer. 
                    </div>
                    <div className="mt-12">
                        In 2017, Caroline graduated with a bachelor&apos;s degree in Instrumental Music Education from Florida State University. Three years later, in May of 2020, she graduated with a Master of Music degree from the University of Texas at Austin. However, the COVID-19 pandemic had made career prospects of the orchestral music world especially uncertain. Deciding it was time to pursue a new career path, Caroline obtained a certificate in full-stack web development from the University of Texas at Austin Center for Professional Education.
                    </div>
                    <div className="flex justify-center">
                        <Image
                            alt=""
                            src="/life_photos/mountain_time.jpg"
                            width={320}
                            height={320}
                            className="h-80 w-auto mt-12"
                        />
                    </div>
                    <div className="mt-12">
                        Two months after graduating with her certificate, Caroline started her first job as a web developer as the 14th employee of Dispel. She found that the principles of music applied beautifully to technology. Discipline, critical problem-solving, and the pursuit of constant improvement were all characteristics that benefit both the engineer and the musician. Over the two years she spent at Dispel, she grew and learned from new experiences as well as the expertise of her colleagues. 
                    </div>
                    <div className="mt-12">
                        In 2023, she was offered a job as a UX Engineer at Cisco Systems, on a design system team where creativity and engineering intertwined to create efficient and delightful user experiences. As the technology landscape shifted with the emergence of AI, Caroline&apos;s team pivoted in 2025 to develop new tools that enable developers and designers to create their best work using pre-existing design systems. She utilized backend development skills and DevOps processes to help create multiple new AI tools that are widely used across her department, and continues to effectively (and responsibly) leverage the most effective AI tools in her development work.
                    </div>
                </div>
            </div>
        </div>
    )
}