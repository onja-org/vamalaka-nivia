import { RoleSelectOnboard } from '../components/RoleSelectOnboard/RoleSelectOnboard'

const footerLinks = [
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '1',
    },
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '2',
    },
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '3',
    },
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '4',
    },
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '5',
    },
]


function OnboardingPage() {
  return (
    <>
      <RoleSelectOnboard footerLinks={footerLinks}/>
    </>
  )
}

export default OnboardingPage
