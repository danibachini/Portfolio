
import { MongoClient, ObjectId } from 'mongodb';

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

async function getData() {
  const driver: string = process.env.MONGODB_URI ?? '';
  const client: MongoClient = new MongoClient(driver);

  try {
    await client.connect();
    const projects = await client
      .db('PortfolioDb')
      .collection<Project>('Projects')
      .find({}, {projection: {
        _id: false,
        video: false,
        code: false,
        tech: false,
      }})
      .toArray();

    return projects

  } catch (error) {
    return (error)

  } finally {
    client.close();
  }
}

export default async function Page() {
  const projectsList: Project[]  = await getData() as Project[];

  return (
    <main className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center'>
      {projectsList.reverse().map((project) => (
        <a href={`/projects/${project.projectId}`} key={project.projectId}>
          <div 
          
          className='relative w-full h-64 rounded bg-cover bg-center hover:scale-105 hover:shadow-xl duration-300' 
          style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className='bg-white bg-opacity-80 absolute bottom-0 w-full gap-60'>
              <p className='px-4 pt-2'>{project.title}</p>
              <p className='px-4 pb-2 text-xs'>{project.title_fr}</p>
            </div>
          </div>
        </a> 
      ))}
    </main>
  )
}
