import * as React from 'react';
import { Html, Body, Head, Heading, Container, Preview, Text, Link } from '@react-email/components';

interface EbookTemplateProps {
  firstName: string;
}

export const EbookTemplate: React.FC<Readonly<EbookTemplateProps>> = ({
  firstName,
}) => (
  <Html>
    <Head />
    <Preview>Your free E-book from Bob Wiley Counseling</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Hi {firstName},</Heading>
        <Text style={text}>
          Thank you for requesting "A Guide to Understand Yourself from the Inside Out".
        </Text>
        <Text style={text}>
          You can download your free E-Book by clicking the link below:
        </Text>
        <Link href="https://bobwileycounseling.com/downloads/Your%20Key%20to%20Personal%20Happiness%20(EBook).pdf" style={button}>
          Download E-Book
        </Link>
        <Text style={text}>
          If you have any questions or would like to schedule your free consultation, just reply to this email!
        </Text>
        <Text style={text}>
          Best regards,<br />
          Bob Wiley, MA, LMHC, CSAT
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '"Inter", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
};

const button = {
  backgroundColor: '#5469d4',
  borderRadius: '4px',
  color: '#fff',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '50px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  width: '100%',
  marginBottom: '20px',
};
