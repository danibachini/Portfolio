
import { MongoClient, ObjectId } from "mongodb";

interface Project {
    _id: ObjectId;
    image: string;
    title: string;
    title_fr: string;
    video: string;
    code: string;
    tech: string;
}

export async function getData ( params: ObjectId ) {

    const driver: string | undefined = process.env.MONGO_URL as string;
    const client: MongoClient = new MongoClient(driver);

    try {
        await client.connect();
        const data = await client
        .db('PortfolioDb')
        .collection<Project>('Projects')
        .findOne({_id: new ObjectId(params)}, {projection: {
            _id: false
        }});

        return (data);

    } catch (error) {
        return (error)

    } finally {
        client.close();
    }
}

export default async function Project( request: any ) {
    const project: Project = await getData(request.params.id) as Project;

    return(
        <h1>{project.title}</h1>
    )

}
