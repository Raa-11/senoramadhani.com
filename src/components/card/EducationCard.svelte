<script lang="ts">
    import { fade } from "svelte/transition";

    export let school: string;
    export let location: string;
    export let bachelor: string;
    export let period: [start: Date, end: Date];
    export let gpa: [ipk: number, max: number];
    export let honors: string;
</script>

<div transition:fade>
    <div class="flex flex-col md:flex-row items-start justify-between">
        <div>
            <div class="flex flex-col md:flex-row items-start md:items-center md:gap-2 py-2 md:py-0">
                <h3 class="font-bold font-serif md:text-lg text-black">
                    {school}
                </h3>
            </div>
            <span class="text-sm md:text-base font-serif text-black">{bachelor}</span>
        </div>
        <span class="text-gray-600 font-mono text-sm md:text-base">
			{period[0].toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
            -
            {#if period[1] === null}
				Present,
			{:else}
				{period[1].toLocaleDateString("en-GB", { month: "short", year: "numeric" })},
			{/if}
            {location}
		</span>
    </div>
    <p class="pt-2 text-sm font-serif text-gray-600">
        GPA: {gpa[0]}/{gpa[1].toFixed(2)} ({honors})
    </p>
</div>