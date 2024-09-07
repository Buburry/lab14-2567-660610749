"use client";
import Footer from "@components/Footer";
import { Container, Text, Title,Rating,Textarea ,Button,Divider,Group,Pagination} from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      
      <Title order={4} mt="sm">Your rating </Title>

      <Rating defaultValue={0} count={5} size="lg" />
      
      <Textarea 
      mt="sm"
      label="Your review"
      placeholder="Do your enjoy eating?"
      minRows={3}
      maxRows={3}
      autosize
    />

      <Button variant="filled" color="orange" mt="xs">Submit Review</Button>

      <Divider my="md" />

      <Group justify="center"> 
        <Title order={4}  ta="center" >Elon Musk </Title>
        <Rating value={5} fractions={2} readOnly />
      </Group>
      <Text ta="center" c="dimmed" size="15px" mt="xs">Best pizza in this world. I give you X score.</Text>
      <Divider my="md" />

      <Group justify="center"> 
        <Title order={4}   >Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly size="sm" />
      </Group>
      
      <Text ta="center" c="dimmed" size="15px" mt="xs">My favourite part is pepperoni</Text>

      <Group justify="center" mt="md">
        <Pagination  total={20} boundaries={1} defaultValue={1} variant="filled" color="orange" />
      </Group> 

      <Text ta="center" my="sm" c="dimmed" >
         Copyright © 2024 Natapon Phairin 660610749 
        
      </Text>
    </Container>
  );
}
