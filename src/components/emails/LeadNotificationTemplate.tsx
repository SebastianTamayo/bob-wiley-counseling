import * as React from 'react';
import { Html, Body, Head, Heading, Container, Preview, Text, Section, Img, Hr } from '@react-email/components';

interface LeadNotificationTemplateProps {
  name: string;
  email: string;
  type: string;
  details?: string;
}

const baseUrl = 'https://bobwileycounseling.com';

export const LeadNotificationTemplate: React.FC<Readonly<LeadNotificationTemplateProps>> = ({
  name,
  email,
  type,
  details,
}) => (
  <Html>
    <Head />
    <Preview>New Lead Captured: {name} ({type})</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            src={`${baseUrl}/images/logo.png`}
            width="140"
            height="auto"
            alt="Bob Wiley Counseling"
          />
        </Section>
        
        <Section style={card}>
          <Section style={typeHeader}>
            <Text style={typeLabel}>NEW {type.toUpperCase().replace('-', ' ')}</Text>
          </Section>
          
          <Section style={infoSection}>
            <Heading style={h1}>Lead Details</Heading>
            <Hr style={hr} />
            
            <Section style={row}>
              <Text style={label}>Name</Text>
              <Text style={value}>{name}</Text>
            </Section>
            
            <Section style={row}>
              <Text style={label}>Email</Text>
              <Text style={value}>
                <a href={`mailto:${email}`} style={link}>{email}</a>
              </Text>
            </Section>
            
            <Section style={row}>
              <Text style={label}>Source</Text>
              <Text style={value}>v2 Landing Page</Text>
            </Section>

            {details && (
              <Section style={detailsBox}>
                <Text style={label}>Message/Details</Text>
                <Text style={detailsText}>{details}</Text>
              </Section>
            )}
          </Section>
        </Section>
        
        <Section style={footer}>
          <Text style={footerText}>
            This is an automated notification from your website's lead capture system.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f1f5f9',
  fontFamily: '"Inter", "Helvetica", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  width: '580px',
};

const header = {
  textAlign: 'center' as const,
  paddingBottom: '20px',
};

const card = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  border: '1px solid #e2e8f0',
};

const typeHeader = {
  backgroundColor: '#1e1b4b',
  padding: '12px 20px',
  textAlign: 'center' as const,
};

const typeLabel = {
  color: '#0ea5e9',
  fontSize: '12px',
  fontWeight: '800',
  letterSpacing: '0.1em',
  margin: 0,
};

const infoSection = {
  padding: '30px',
};

const h1 = {
  color: '#0f172a',
  fontSize: '20px',
  fontWeight: '700',
  margin: '0 0 10px',
};

const hr = {
  borderColor: '#f1f5f9',
  margin: '20px 0',
};

const row = {
  padding: '10px 0',
};

const label = {
  color: '#64748b',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  margin: '0 0 4px',
};

const value = {
  color: '#1e293b',
  fontSize: '16px',
  fontWeight: '500',
  margin: 0,
};

const link = {
  color: '#0ea5e9',
  textDecoration: 'none',
};

const detailsBox = {
  backgroundColor: '#f8fafc',
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
  border: '1px solid #f1f5f9',
};

const detailsText = {
  color: '#334155',
  fontSize: '15px',
  lineHeight: '22px',
  margin: 0,
};

const footer = {
  textAlign: 'center' as const,
  paddingTop: '30px',
};

const footerText = {
  color: '#94a3b8',
  fontSize: '12px',
};
