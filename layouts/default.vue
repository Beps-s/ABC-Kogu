<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/borrowedBooks">Borrowed Books</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/bookPage">Book Page</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    <div>
        <slot />
    </div>
    <div>
        <footer>
            <p>Footer</p>
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>

</style>