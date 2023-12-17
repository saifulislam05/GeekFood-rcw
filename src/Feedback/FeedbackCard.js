import React from 'react'

const FeedbackCard = () => {
  return (
    <div class="mb-8 sm:break-inside-avoid">
      <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
        <p class="leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          dicta amet, molestiae aliquam incidunt suscipit recusandae labore
          ratione doloremque, architecto et illo minus quo tenetur ducimus,
          voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti
          blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad
          inventore laudantium est illum voluptatem quis.
        </p>
      </blockquote>

      <div class="mt-4 flex items-center gap-4">
        <img
          alt="Woman"
          src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          class="h-12 w-12 rounded-full object-cover"
        />

        <div class="text-sm">
          <p class="font-medium">Gladis Lennon</p>
          <p class="mt-1">Head of SEO</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard