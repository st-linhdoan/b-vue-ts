import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

const Page = defineComponent(() => {
  return () => (
    <div class="pages-container">
      <RouterView />
    </div>
  );
});

export default Page;
