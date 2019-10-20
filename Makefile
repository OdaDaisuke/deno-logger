.PHONY: run install

run:
	@deno -A mod.ts --allow-env --allow-read

install:
	@deno install logger ./mod.ts --allow-env --allow-read
