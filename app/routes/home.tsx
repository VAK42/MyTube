import { getVideos } from '../models/video.server';
import { VideoCard } from '../components/VideoCard';
import type { Route } from './+types/home';
export function meta({ }: Route.MetaArgs) {
  return [{ title: "Home - Youtube" }];
}
export async function loader() {
  const videos = getVideos(100);
  return { videos };
}
export default function Home({ loaderData }: Route.ComponentProps) {
  const { videos } = loaderData;
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videos.map((video: any) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
