import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | IssueFlow',
  description:
    'Read the Terms of Service for IssueFlow, including acceptable use, account responsibilities, disclaimers, and contact information.',
}

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mt-8 space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
        <p>
          These Terms of Service ("Terms") govern your access to and use of IssueFlow (the
          "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you
          do not agree to these Terms, do not use the Service.
        </p>

        <div>
          <h2 className="text-xl font-semibold">1. Eligibility & Account</h2>
          <p className="mt-2">
            You must be at least the age of majority in your jurisdiction to use the Service. You are
            responsible for all activity under your account and for safeguarding your credentials.
            Provide accurate information and promptly update any changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. Acceptable Use</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Do not violate any applicable laws or regulations.</li>
            <li>Do not attempt to disrupt, overload, or interfere with the Service.</li>
            <li>Do not misuse or attempt to access another user’s account or data.</li>
            <li>Do not upload malicious code, spam, or content that infringes third-party rights.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Your Content</h2>
          <p className="mt-2">
            You retain ownership of the content you submit to the Service. By submitting content, you
            grant us a non-exclusive, worldwide, royalty-free license to host, store, and display that
            content solely to operate and improve the Service. You are responsible for ensuring that
            your content complies with these Terms and applicable law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
          <p className="mt-2">
            The Service, including its UI components, code, and branding, is protected by intellectual
            property laws. Except for the rights expressly granted, we retain all rights, title, and
            interest in and to the Service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
          <p className="mt-2">
            The Service may integrate with third-party services (e.g., databases, hosting providers).
            Your use of those services is subject to their respective terms and privacy policies. We
            are not responsible for third-party services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">6. Privacy</h2>
          <p className="mt-2">
            We process your information to provide and improve the Service, including authentication
            and security. Do not submit sensitive personal data unless necessary. For details on data
            handling, refer to any posted privacy documentation. If no privacy policy is posted, data
            is handled solely for the purpose of operating the Service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">7. Fees</h2>
          <p className="mt-2">
            Unless otherwise stated, the Service is provided without charge. If paid plans are
            introduced, pricing and billing terms will be provided and will form part of these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">8. Termination</h2>
          <p className="mt-2">
            We may suspend or terminate your access to the Service at any time for conduct that
            violates these Terms, creates legal exposure, or disrupts the Service. You may stop using
            the Service at any time. Provisions intended to survive termination will do so, including
            ownership, disclaimers, and limitations of liability.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">9. Disclaimers</h2>
          <p className="mt-2">
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY
            KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED,
            SECURE, OR ERROR-FREE.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
          <p className="mt-2">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
            WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
            INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF THE SERVICE.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">11. Indemnification</h2>
          <p className="mt-2">
            You agree to indemnify and hold harmless us and our affiliates from and against any claims,
            liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of
            or in any way connected with your use of the Service or violation of these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">12. Governing Law</h2>
          <p className="mt-2">
            These Terms are governed by the laws applicable in your jurisdiction unless otherwise
            required by law. Venue and jurisdiction for any disputes will be with the courts located in
            a competent jurisdiction.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">13. Changes to These Terms</h2>
          <p className="mt-2">
            We may modify these Terms from time to time. If we make material changes, we will provide
            notice by updating the "Last updated" date at the top of this page or via other
            appropriate means. Your continued use of the Service after changes become effective
            constitutes acceptance of the revised Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">14. Contact</h2>
          <p className="mt-2">
            Questions about these Terms? Contact us at <a className="underline" href="mailto:javad.esmatib@gmail.com">Javad Esmati</a>.
          </p>
        </div>
      </section>
    </main>
  )
}



