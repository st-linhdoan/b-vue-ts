import { defineComponent } from 'vue';
import HelloWorld from '../../../shared/components/HelloWorld';
import { useTranslation } from 'i18next-vue';

const HomePage = defineComponent(() => {
  const { t } = useTranslation();

  return () => (
    <div>
      <p> {t('common.test')} </p>
      This is home page !
      <HelloWorld msg="Hello" />
    </div>
  );
});

export default HomePage;
