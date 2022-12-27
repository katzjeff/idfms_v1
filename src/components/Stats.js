import React from 'react'

function Stats() {
  return (
    <div>
      <section class="bg-white dark:bg-[#162131]">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">transactions</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">managed</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">40+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">organizations</dd>
          </div>
      </dl>
  </div>
</section>
    </div>
  )
}

export default Stats