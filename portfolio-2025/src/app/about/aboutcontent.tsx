"use client"

export default function AboutContent() {
    return (
        <div>
            <div className="mt-8 ml-40">
                <span className="mt-80 font-bold text-4xl">
                    About
                </span>
                <div className="mt-12 mr-40">
                    Caroline Miller King is a software engineer and musician living in the windy city of Chicago, Illinois. Born and raised by the foothills in the Rocky Mountains of Colorado, Caroline began studying music at a very young age, which would later become crucial to her expertise and perspective as a software engineer. Her musical adventures began the age of four with the violin {`(a short-lived experiment)`}, voice starting at age seven, piano at eight, flute at 11, and the finally, the bassoon at age 14.
                </div>
                <div className="mt-12 mr-40">
                    In 2017, Caroline graduated with a bachelor's degree in Instrumental Music Education from Florida State University. Three years later, in May of 2020, she graduated with a Master of Music degree from the University of Texas at Austin. However, the COVID-19 pandemic had made career prospects of the orchestral music world especially uncertain. Deciding it was time to pursue a new career path, Caroline obtained a certificate in full-stack web development from the University of Texas at Austin Center for Professional Education.
                </div>
                <div className="flex justify-center">
                    <img
                        alt=""
                        src="/life_photos/mountain_time.jpg"
                        className="h-80 w-auto mt-12"
                    />
                </div>
                <div className="mt-12 mr-40">
                    Two months after graduating with her certificate, Caroline started her first job as a web developer at {`(what was then)`} a small startup. Despite the fact that Caroline was brand-new to engineering, she found that the principles of music applied beautifully to technology. Discipline, critical problem-solving, and the pursuit of constant improvement were all characteristics that benefit both the engineer and the musician. Over the two years she spent at Dispel, she grew and learned from new experiences as well as the expertise of her colleagues. In 2023, she was offered a job as a UX Engineer at Cisco Systems, on a design system team where creativity and engineering intertwine to create efficient and delightful user experiences. Caroline still works at Cisco today, enjoying the opportunity to develop systems that improve people's quality of work life.
                </div>
                <div className="flex justify-center">
                    <img
                        alt=""
                        src="/life_photos/flute.png"
                        className="h-60 w-auto mt-12"
                    />
                </div>
                <div className="mt-12 mr-40 mb-40">
                    Caroline is an active musician in the Chicago area, most recently joining "Sulam" as a composer and singer. The new music collective will be releasing an album in 2026, as well as performing a live concert in Chicago. 
                </div>
            </div>
        </div>
    )
}