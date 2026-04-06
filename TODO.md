# Fix Initial Site Display Issue: "Himashu Shekhar and H"

## Summary

**Problem**: On first load, Loader shows large plain "H" text before the full name "HIMANSHU SHEKHAR", creating awkward "name and H" appearance.

**Root Cause**: Hardcoded plain text "H" in Loader.jsx logo section lacks proper branding integration.

**Solution**:

- Replace plain "H" with SVG hexagon logo + overlaid "H" (matching Navbar).
- Proper name casing.
- Shorten loader duration.
- Update Hero.jsx and Navbar.jsx to "Himanshu Shekhar" for full consistency (template was "Viktor").

## Steps

1. [x] Analyzed files with tools
2. [x] Detailed plan created and **approved by user**
3. [ ] **Create this TODO.md**
4. [x] Edit Loader.jsx logo SVG integration
5. [x] Edit Loader.jsx name casing & timer
6. [x] Edit Hero.jsx name and alt
7. [x] Edit Navbar.jsx logo "V"-> "H" and name
8. [ ] Test: Run `sessionStorage.removeItem('hasSeenLoader'); location.reload();`
9. [ ] Update TODO.md with results
10. [ ] attempt_completion

**Next**: Implementing edits...
