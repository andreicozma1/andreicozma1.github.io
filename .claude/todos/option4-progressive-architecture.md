# TODO: Add Component Support for Option 4 Progressive Matrix Structure

## Context
Option 4 (Progressive Expertise Matrix) was designed to show skill progression within each domain (Foundational → Core → Advanced) but currently uses the same flat structure as Option 2 due to architectural limitations.

## Goal
Add support for nested course groupings/subsections within domains while maintaining backwards compatibility with existing page components and layouts.

## Requirements
1. **Nested subsections**: Ability to have hierarchical course groupings within a section
2. **Composable components**: Make components modular and reusable
3. **Backwards compatible**: Don't break existing pages (Resume, Academics, Seminars, etc.)
4. **Visual hierarchy**: Clear visual distinction between progression levels

## Proposed Approach
- Extend `PageSection` component to support optional nested subsections
- Add subsection rendering logic to `PageSectionResponsive`
- Create visual indicators for progression levels (badges, headers, dividers)
- Update JSON schema to support nested structure (optional `subsections` array)

## Example Structure
```json
{
  "title": "Intelligent Systems & Machine Learning",
  "variant": "grid6",
  "subsections": [
    {
      "title": "Foundational",
      "level": "foundation",
      "items": [/* COSC 420, etc */]
    },
    {
      "title": "Core Graduate",
      "level": "core",
      "items": [/* COSC 522, 523, 525 */]
    },
    {
      "title": "Advanced & Specialized",
      "level": "advanced",
      "items": [/* ECE 517, COSC 524 */]
    }
  ]
}
```

## Files to Modify
- `src/components/PageElements/PageSection.tsx`
- `src/components/PageElements/PageSectionResponsive.tsx`
- `src/components/TemplatedDataProps.ts` (type definitions)
- Create new data files in `src/data/academics-matrix/` with nested structure

## Priority
Low - Current flat implementation works, but progressive nested structure would better demonstrate skill development trajectory.
