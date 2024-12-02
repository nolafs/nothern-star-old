

/* eslint-disable-next-line */
export interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <div className={'mx-auto max-w-4xl text-primary prose lg:prose-xl  text-primary'}>
      <h1>Cookie Policy</h1>
      <p>At Northern Star, we value your privacy and strive to be transparent about the data we collect and
        how it is used. This Cookie Policy outlines how we use cookies on our website.</p>

      <h2>What are cookies?</h2>
      <p>Cookies are small text files that are placed on your device when you visit a website. They are commonly used to
        make websites work more efficiently and to provide information to the website owners.</p>

      <h2>How do we use cookies?</h2>
      <p>We only use cookies for Google Analytics, which helps us understand how visitors interact with our website.
        This information helps us improve our website and provide you with a better user experience.</p>

      <h2>What information do we collect?</h2>
      <p>Google Analytics cookies collect anonymous information such as the number of visitors to the website, which
        pages they visit, and how they found the website. This information is aggregated and does not personally
        identify you.</p>

      <h2>How to control cookies</h2>
      <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer
        and you can set most browsers to prevent them from being placed. However, if you do this, you may have to
        manually adjust some preferences every time you visit a site and some services and functionalities may not
        work.</p>

      <h2>Changes to this Cookie Policy</h2>
      <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other
        operational, legal, or regulatory reasons. We encourage you to review this Cookie Policy periodically to stay
        informed about how we use cookies.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our Cookie Policy, please contact us at <a
        href="mailto:hello@northernstar.games">hello@northernstar.games</a>.</p>

      <p>This Cookie Policy was last updated on 08/05/2024.</p>
    </div>
  );
}
