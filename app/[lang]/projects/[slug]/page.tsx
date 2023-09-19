
import { dictionary } from "@/content";
import { MongoClient, ObjectId } from "mongodb";
import Link from "next/link";

interface Project {
    _id: ObjectId;
    image: string;
    title: string;
    title_fr: string;
    video: string;
    code: string;
    tech: string;
    projectId: string;
}

export async function getData ( params: string ) {

    const driver: string = process.env.MONGODB_URI as string;
    const client: MongoClient = new MongoClient(driver);

    try {
        await client.connect();
        const data = await client
        .db('PortfolioDb')
        .collection<Project>('Projects')
        .findOne({projectId: params}, {projection: {
            _id: false,
            image: false,
            projectId: false,
        }});

        return (data);

    } catch (error) {
        return (error)

    } finally {
        client.close();
    }
}

export default async function Page({ params }: { params: { slug: string, lang: string } }) {

    const project: Project= await getData(params.slug) as Project;

    return (
        <>
            <main className='grid grid-cols-1 '>
                <div className="rounded shadow-md p-6">
                    <h1 className='px-4 pt-2 text-2xl text-center'>{project.title}</h1>
                    <h1 className='px-4 pb-2 text-base text-center'>{project.title_fr}</h1>

                    <div className="my-8 md:my-12">
                        {/* youtube video */}
                        <iframe
                        className="h-72 min-w-full sm:h-96"
                        src={`https://www.youtube.com/embed/${project.video}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded Youtube Video"
                        />
                    </div>

                    <div className="text-center">

                        <p className="font-thin">{dictionary[params.lang]?.slugTech} {project.tech}</p>
                        <Link href={project.code} target="_blank">
                            <button
                            type="button"
                            className="btn bg-black rounded-none text-slate-100 hover:bg-slate-50 
                            border hover:border-black hover:text-black font-light btn-sm my-8 justify-self-center">
                            {dictionary[params.lang]?.slugCode}
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
