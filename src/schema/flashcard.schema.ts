/**
 * `@/schema/flashcard.schema.ts`
 */

import z from "zod";

const FlashCardSchema = z.object({
    id: z.string(),
    front: z.string(),
    back: z.string(),
    hint: z.string(),
    tags: z.array(z.string()),
});

const CreateFlashCardSchema = z.object({
    front: z.string(),
    back: z.string(),
    hint: z.string(),
    tags: z.array(z.string()),
});

const EditFlashCardSchema = z.object({
    front: z.string(),
    back: z.string(),
    hint: z.string(),
    tags: z.array(z.string()),
});

const FilterFlashCardSchema = z.object({
    filter: z.string(),
});

const getFlashCardSchema = z.object({
    FlashCardId: z.string(),
});

const getFlashCardsSchema = z.object({
    FlashCardIds: z.array(z.string()),
});

const getFlashCardsByTagSchema = z.object({
    tag: z.string(),
});

const getFlashCardsByTagsSchema = z.object({
    tags: z.array(z.string()),
});

type FlashCardSchema = z.TypeOf<typeof FlashCardSchema>;
type CreateFlashCardInput = z.TypeOf<typeof CreateFlashCardSchema>;
type EditFlashCardInput = z.TypeOf<typeof EditFlashCardSchema>;
type FilterFlashCardInput = z.TypeOf<typeof FilterFlashCardSchema>;
type GetFlashCardInput = z.TypeOf<typeof getFlashCardSchema>;
type GetFlashCardsInput = z.TypeOf<typeof getFlashCardsSchema>;
type GetFlashCardsByTagInput = z.TypeOf<typeof getFlashCardsByTagSchema>;
type GetFlashCardsByTagsInput = z.TypeOf<typeof getFlashCardsByTagsSchema>;

export {
    FlashCardSchema,
    CreateFlashCardSchema,
    EditFlashCardSchema,
    FilterFlashCardSchema,
    getFlashCardSchema,
    getFlashCardsSchema,
    getFlashCardsByTagSchema,
    getFlashCardsByTagsSchema,
};

export type {
    CreateFlashCardInput,
    EditFlashCardInput,
    FilterFlashCardInput,
    GetFlashCardInput,
    GetFlashCardsInput,
    GetFlashCardsByTagInput,
    GetFlashCardsByTagsInput,
};
