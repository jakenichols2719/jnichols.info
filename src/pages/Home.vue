<script setup>
import Section from '../components/Section.vue';
import Subsection from '../components/Subsection.vue'
</script>

<template>
    <Section title="About" griddy>
    <p>
      Hi! I'm Jake, I live in Boulder, CO, and I make things. Usually those things are software,
      but sometimes they're other things, like reptile enclosures, good food, or half-decent playlists. This website
      is mostly about the software.
    </p><br>
    <p>
      If you want to contact me, I'm most responsive to email: <a href="mailto:mail@jnichols.info">mail@jnichols.info</a>
    </p>
  </Section>
  <Section title="Skills" griddy>
    <Subsection title="Certifications">
      <ul>
        <li>Mulesoft Certified Developer Level 1</li>
      </ul>
    </Subsection>
    <Subsection title="Full-Stack">
      <ul>
        <li>Frontend: HTML/CSS/JS, VueJS</li>
        <li>Backend: NodeJS, Golang</li>
        <li>Database/Caching: MySQL, InfluxDB, Redis</li>
      </ul>
    </Subsection>
    <Subsection title="Cloud Native">
      <ul>
        <li>Orchestration: Docker, Kubernetes</li>
        <li>Metrics: Prometheus, Grafana, Trickster</li>
      </ul>
    </Subsection>
    <Subsection title="AWS">
      <ul>
        <li>Compute: EC2, Lambda</li>
        <li>Deployment/Integration: Amplify, API Gateway</li>
        <li>Storage: S3, DynamoDB</li>
      </ul>
    </Subsection>
  </Section>
  <Section title="Work Experience" griddy>
    <Subsection title="Cloud Software Engineer, Virga (Jan 2022 to May 2023)">
      <p>
        Built key features for an agricultural application, including fire/smoke detection and pest prediction,
        by leveraging in-house machine learning models and integrating external APIs. Additionally maintained
        <a href="https://github.com/trickstercache/trickster">Trickster</a>, a timeseries database accelerator,
        with a focus on feature development for the project's 2.0 release.
      </p>
    </Subsection>
    <Subsection title="Consultant, ArganoConnect (June 2023 to Today)">
      <p>
        Leveraging MuleSoft to build integrations between Salesforce and proprietary SaaS products.. Primary
        responsibilities include meeting with clients for requirements gathering, managing internal and shared use
        case documentation, developing integrations, and constructing demos for the client.
      </p>
    </Subsection>
  </Section>
  <Section title="FOSS Projects" griddy :bordery="false">
    <Subsection title="Matcha" linky="https://github.com/cloudretic/matcha">
      <p>
        Matcha is an HTTP request router library for Golang. There are many projects like this one, but Matcha is
        faster, more practical, and more extensible than most options when it comes to routing for complex APIs.
      </p><br>
      <p>
        This is the first project falling under the umbrella of CloudRETIC, which is a company I started to build
        better software solutions for educators. Matcha gives me a solid starting point to build comprehensive,
        scalable backend services. You heard it here first, folks, Matcha is web scale.
      </p>
    </Subsection>
    <Subsection title="Trickster" linky="https://github.com/trickstercache/trickster">
      <p>
        Trickster is a reverse proxy cache, purpose-built for dashboard queries on timeseries databases. It's got a lot
        of other features built in as well, like a super fast load balancer, byte range requests, negative caching,
        and distributed telemetry. It's really, *really* fantastic if you need to track metrics in a distributed
        system.
      </p><br>
      <p>
        The vast, vast majority of this work is owed to the fantastic
        <a href="https://github.com/jranson">James Ranson</a>, but I'm happy to say that I contributed a number of
        features to the next major release, including:
      </p>
      <ul>
        <li>Breaking cache objects into smaller chunks for better interoperability with sharded caches</li>
        <li>Compatibility with InfluxDB 2.0 and MySQL</li>
        <li>Kubernetes service discovery</li>
      </ul>
      <p>
        ...as well as a number of bugfixes and boilerplate additions. I contribute to Trickster fairly regularly,
        so this list grows over time.
      </p>
    </Subsection>
  </Section>
</template>