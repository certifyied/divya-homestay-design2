import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-700 mt-16 md:mt-20 lg:mt-24 leading-relaxed">

        <h1 className="text-3xl font-semibold mb-6">
          Privacy Policy – Pendora Glamps
        </h1>

        <p className="mb-4">
          At Pendora Glamps, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Name, email address, and phone number</li>
          <li>Booking details and preferences</li>
          <li>Payment information (processed securely through third-party providers)</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Process and manage your bookings</li>
          <li>Communicate booking confirmations and updates</li>
          <li>Improve our services and customer experience</li>
          <li>Send important notifications related to your stay</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Data Protection
        </h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access, misuse, or disclosure.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Third-Party Services
        </h2>
        <p className="mb-4">
          We may use trusted third-party services for payments and analytics. These providers are obligated to keep your information secure.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Your Consent
        </h2>
        <p className="mb-8">
          By using our website, you agree to the terms of this Privacy Policy.
        </p>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Booking Policy */}
        <h1 className="text-2xl font-semibold mb-4">
          Booking, Cancellation & Refund Policy
        </h1>

        {/* Booking */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Booking Policy
        </h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>A booking is confirmed only after successful payment.</li>
          <li>Guests are required to provide accurate information during booking.</li>
        </ul>

        {/* Cancellation */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Cancellation & Refund Policy
        </h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Cancellations must be made at least 7 days prior to the check-in date to be eligible for a refund.</li>
          <li>An 18% tax charge will be deducted from the total booking amount.</li>
          <li>The remaining balance will be refunded to the original payment method.</li>
          <li>No refunds will be provided for cancellations made within 7 days of the check-in date.</li>
        </ul>

        {/* Guest Policy */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Guest Policy & Extra Charges
        </h2>
        <p className="mb-2 font-medium">The standard package includes:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>2 Adults (Father & Mother)</li>
          <li>1 Child</li>
          <li>10,000 + GST</li>
        </ul>

        <p className="mb-2 font-medium">Additional guest charges:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Extra Adult: ₹2500 per person</li>
          <li>Extra Child: ₹1500 per child</li>
        </ul>

        <p className="mb-4">
          <span className="font-medium">Example:</span> If a family includes 2 adults and 2 children, the second child will be charged an additional ₹1500.
        </p>

        {/* Modification */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Modification Policy
        </h2>
        <p className="mb-4">
          Booking modifications are subject to availability and may incur additional charges.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Contact Us
        </h2>
        <p>
          For any questions regarding bookings, cancellations, or refunds, please contact us through our website or customer support.
        </p>

      </div>
    </Layout>
  );
};

export default PrivacyPolicy;