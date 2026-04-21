import * as React from 'react';
import { Html, Body, Head, Heading, Container, Preview, Text, Link, Img, Section, Hr } from '@react-email/components';

interface EbookTemplateProps {
  firstName: string;
}

const baseUrl = 'https://bobwileycounseling.com';

export const EbookTemplate: React.FC<Readonly<EbookTemplateProps>> = ({
  firstName,
}) => (
  <Html>
    <Head />
    <Preview>Your free E-book from Bob Wiley Counseling</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            src={`${baseUrl}/images/logo.png`}
            width="180"
            height="auto"
            alt="Bob Wiley Counseling"
            style={logo}
          />
        </Section>
        
        <Section style={content}>
          <Heading style={h1}>Hi {firstName},</Heading>
          <Text style={text}>
            Thank you for requesting <strong>"A Guide to Understand Yourself from the Inside Out"</strong>.
          </Text>
          <Text style={text}>
            You can download your free E-Book by clicking the button below:
          </Text>
          
          <Section style={buttonContainer}>
            <Link 
              href={`${baseUrl}/downloads/Your%20Key%20to%20Personal%20Happiness%20(EBook).pdf`} 
              style={button}
            >
              Download My Free E-Book
            </Link>
          </Section>

          <Hr style={hr} />

          <Section style={personalNote}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Img
                src={`${baseUrl}/images/bob-headshot.jpg`}
                width="80"
                height="80"
                alt="Bob Wiley"
                style={avatar}
              />
              <div style={{ flex: 1 }}>
                <Text style={noteText}>
                  "I truly believe that understanding the mechanics of your own mind is the first step toward lasting peace. I hope this guide helps you as much as it has helped my clients."
                </Text>
              </div>
            </div>
          </Section>

          <Text style={text}>
            If you have any questions or would like to schedule your free consultation to dive deeper into these concepts, simply reply to this email.
          </Text>

          <Text style={signature}>
            Best regards,<br />
            <strong>Bob Wiley, MA, LMHC, CSAT</strong><br />
            <span style={{ fontSize: '14px', color: '#64748b' }}>Insight-Driven Transformation</span>
          </Text>
        </Section>
        
        <Section style={footer}>
          <Text style={footerText}>
            © {new Date().getFullYear()} Bob Wiley Counseling. All rights reserved.<br />
            You received this because you requested a resource from bobwileycounseling.com
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '"Inter", "HelveticaNeue", Helvetica, Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  width: '600px',
  maxWidth: '100%',
};

const header = {
  textAlign: 'center' as const,
  paddingBottom: '30px',
};

const logo = {
  margin: '0 auto',
};

const content = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
};

const h1 = {
  color: '#0f172a',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '32px',
  margin: '0 0 20px',
};

const text = {
  color: '#334155',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '30px 0',
};

const button = {
  backgroundColor: '#0ea5e9',
  borderRadius: '8px',
  color: '#ffffff',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1',
  padding: '18px 32px',
  textAlign: 'center' as const,
  textDecoration: 'none',
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '30px 0',
};

const personalNote = {
  backgroundColor: '#f1f5f9',
  padding: '24px',
  borderRadius: '8px',
  marginBottom: '30px',
};

const avatar = {
  borderRadius: '50%',
  border: '2px solid #ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const noteText = {
  color: '#475569',
  fontSize: '15px',
  fontStyle: 'italic',
  lineHeight: '22px',
  margin: 0,
};

const signature = {
  color: '#0f172a',
  fontSize: '16px',
  lineHeight: '24px',
  marginTop: '40px',
};

const footer = {
  textAlign: 'center' as const,
  paddingTop: '30px',
};

const footerText = {
  color: '#94a3b8',
  fontSize: '12px',
  lineHeight: '18px',
};
