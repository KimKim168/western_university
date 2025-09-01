import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import MyNewLayout from './layout/MyLayout';
import MyContact from './components/my-contact';
import MyGoogleMap from './components/my-google-map';
import { usePage } from '@inertiajs/react';
import useTranslation from '@/hooks/use-translation';

const Contact = () => {
  const { contact, locale } = usePage().props;
  const { t } = useTranslation();
  const fontClass =
  locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';

  return (
    <MyNewLayout>
      <div
        className={`relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20 dark:bg-red-950 ${fontClass}`}
      >
        <p className="text-3xl text-white md:text-5xl mb-2">
          {locale === 'kh' ? (contact?.title_kh ?? contact?.title) : contact?.title}
        </p>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white">
                  {t('Home')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#/contact" className="text-gray-400">
                  {locale === 'kh'
                    ? (contact?.title_kh ?? contact?.title)
                    : contact?.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <MyContact />
      <MyGoogleMap />
    </MyNewLayout>
  );
};

export default Contact;
