import * as React from 'react';
import { Html, Body, Head, Container, Preview, Text, Link } from '@react-email/components';

interface EbookTemplateProps {
  firstName: string;
}

const baseUrl = 'https://bobwileycounseling.com';

export const EbookTemplate: React.FC<Readonly<EbookTemplateProps>> = ({
  firstName,
}) => (
  <Html>
    <Head />
    <Preview>Here is the guide you requested</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={text}>
          Hi {firstName},
        </Text>
        
        <Text style={text}>
          Thanks for requesting &quot;A Guide to Understand Yourself from the Inside Out&quot;.
        </Text>
        
        <Text style={text}>
          You can download your copy directly using this link:<br />
          <Link 
            href={`${baseUrl}/downloads/Your%20Key%20to%20Personal%20Happiness%20(EBook).pdf`} 
            style={link}
          >
            Download Guide (PDF)
          </Link>
        </Text>

        <Text style={text}>
          I truly believe that understanding the mechanics of your own mind is the first step toward lasting peace. I hope this guide helps you as much as it has helped my clients.
        </Text>

        <Text style={text}>
          If you have any questions or would like to schedule your free consultation to dive deeper into these concepts, simply reply to this email.
        </Text>

        <Text style={text}>
          Best,<br />
          Bob Wiley, MA, LMHC, CSAT
        </Text>
        
        <Text style={footerText}>
          You received this because you requested a resource from bobwileycounseling.com
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px',
};

const link = {
  color: '#0645AD',
  textDecoration: 'underline',
};

const footerText = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  marginTop: '40px',
};
