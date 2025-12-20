import { component$ } from '@builder.io/qwik';
import { AnimeVNActivity } from '~/components/anime-vn-activity/AnimeVNActivity';

export default component$(() => {
  return (
    <main style={{ paddingTop: '96px' }}>
      <AnimeVNActivity />
    </main>
  );
});
