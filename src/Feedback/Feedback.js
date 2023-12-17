import React from "react";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  const feedbackData = [
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit.",
      name: "Gladis Lennon",
      designation: "Head of SEO",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Voluptatem quisquam aliquid rerum sapiente veniam illum maiores repellendus, aperiam vel ab! Ipsam corrupti blanditiis dolorum!",
      name: "John Doe",
      designation: "Product Manager",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Inventore laudantium est illum voluptatem quis, sapiente veniam illum maiores repellendus, aperiam vel ab! Ipsam corrupti blanditiis dolorum!",
      name: "Jane Smith",
      designation: "UX Designer",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore.",
      name: "Alex Johnson",
      designation: "Software Engineer",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad.",
      name: "Samuel White",
      designation: "Marketing Specialist",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit.",
      name: "Emily Brown",
      designation: "Graphic Designer",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Voluptatem quisquam aliquid rerum sapiente veniam illum maiores repellendus, aperiam vel ab! Ipsam corrupti blanditiis dolorum!",
      name: "Ethan Walker",
      designation: "Frontend Developer",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Inventore laudantium est illum voluptatem quis, sapiente veniam illum maiores repellendus, aperiam vel ab! Ipsam corrupti blanditiis dolorum!",
      name: "Olivia Taylor",
      designation: "UI Designer",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore.",
      name: "Ava Martinez",
      designation: "SEO Specialist",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      content:
        "Ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad.",
      name: "Logan Clark",
      designation: "Content Writer",
    },

  ];
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {feedbackData.map((data, index) => (
              <FeedbackCard
                key={index}
                data={data}
              />
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
