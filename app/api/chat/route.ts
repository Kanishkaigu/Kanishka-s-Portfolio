import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const messages = body.messages || [];
        const lastMessage = messages[messages.length - 1]?.content.toLowerCase() || "";

        let responseContent = "I'm here to help you learn about Kanishka's expertise in Data Science, ML, and AI. Feel free to ask about his skills, experience, projects, or how to get in touch!";

        // Keyword matching logic (Migrated from Python)
        if (["hello", "hi", "hey"].some(w => lastMessage.includes(w))) {
            responseContent = "Hello! Welcome to Kanaltytiq. I'm here to help you learn about Kanishka's expertise in Data Science, Machine Learning, and AI. What would you like to know?";
        } else if (["skill", "expertise", "technology", "tech stack"].some(w => lastMessage.includes(w))) {
            responseContent = "Kanishka specializes in Python, SQL, Machine Learning, Deep Learning, GenAI, and Agentic AI. He's proficient with tools like PyTorch, Scikit-learn, FastAPI, AWS, Docker, Power BI, and Tableau. Would you like to know more about any specific area?";
        } else if (["experience", "work", "project"].some(w => lastMessage.includes(w))) {
            responseContent = "Kanishka has developed end-to-end ML pipelines using Docker and FastAPI, created predictive models, and implemented MLOps solutions. Check out the Projects section to see his work in action!";
        } else if (["contact", "email", "reach", "hire"].some(w => lastMessage.includes(w))) {
            responseContent = "You can reach Kanishka at kanishkasharma399@gmail.com or call +91 7042233425. He's located in Gurugram, Haryana, India and is open to discussing new projects and opportunities!";
        } else if (["education", "study", "degree", "qualification"].some(w => lastMessage.includes(w))) {
            responseContent = "Kanishka has completed a Credit Linked Program in Data Science & ML from IIT Guwahati, holds an MS in Mathematics with Computer Science, and a BS in Statistics. Strong academic foundation in quantitative and computational fields!";
        } else if (["service", "offer", "help", "what can you do"].some(w => lastMessage.includes(w))) {
            responseContent = "Kanaltytiq offers: Data Analytics & Visualization, AI & ML Solutions, MLOps & Model Deployment, Generative AI & Automation, Web Development with AI Integration, and Startup Building services. Which area interests you?";
        }

        return NextResponse.json({
            role: 'bot',
            content: responseContent
        });

    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { role: 'bot', content: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
