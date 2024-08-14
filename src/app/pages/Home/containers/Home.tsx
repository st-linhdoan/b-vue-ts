import { defineComponent } from 'vue';
import HelloWorld from '../../../shared/components/HelloWorld';

const HomePage = defineComponent(() => {
  return () => (
    <div>
      This is home page !
      <HelloWorld msg="Hello" />
    </div>
  );
});

export default HomePage;
