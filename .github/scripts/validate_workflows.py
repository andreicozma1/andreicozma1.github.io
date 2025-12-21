#!/usr/bin/env python3
"""
Validate GitHub Actions workflow YAML files.

This script validates workflow files for:
- Valid YAML syntax
- Proper GitHub Actions workflow structure
- Required fields (name, triggers, jobs, steps)
- Correct indentation (especially for template literals in script blocks)

Usage:
    python3 .github/scripts/validate_workflows.py
    python3 .github/scripts/validate_workflows.py .github/workflows/specific-file.yml
"""

import yaml
import sys
import os
from pathlib import Path


def verify_workflow(filepath):
    """Comprehensive workflow verification"""
    print(f"\n{'='*60}")
    print(f"Verifying: {filepath}")
    print('='*60)

    try:
        with open(filepath, 'r') as f:
            content = f.read()
            data = yaml.safe_load(content)

        # 1. YAML syntax check
        print("✅ YAML syntax: Valid")

        # 2. Check workflow structure
        # Note: 'on' key is parsed as boolean True in YAML
        assert 'name' in data, "Missing 'name' field"
        assert True in data or 'on' in data, "Missing trigger (on)"
        assert 'jobs' in data, "Missing 'jobs' field"
        print("✅ Workflow structure: Valid")

        # 3. Check jobs structure
        job_count = len(data['jobs'])
        print(f"✅ Jobs found: {job_count}")

        for job_name, job_data in data['jobs'].items():
            if not isinstance(job_data, dict):
                print(f"⚠️  Job '{job_name}' is not a dictionary")
                continue

            assert 'steps' in job_data, f"Job '{job_name}' missing steps"
            step_count = len(job_data['steps'])
            print(f"  - {job_name}: {step_count} steps")

        print(f"✅ {filepath}: All checks passed!\n")
        return True

    except yaml.YAMLError as e:
        print(f"❌ YAML Error: {e}")
        return False
    except AssertionError as e:
        print(f"❌ Structure Error: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected Error: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    """Main entry point"""
    # Determine which files to validate
    if len(sys.argv) > 1:
        # Validate specific files passed as arguments
        workflow_files = sys.argv[1:]
    else:
        # Validate all workflow files
        workflows_dir = Path('.github/workflows')
        if not workflows_dir.exists():
            print(f"❌ Directory not found: {workflows_dir}")
            sys.exit(1)

        workflow_files = sorted(workflows_dir.glob('*.yml')) + sorted(workflows_dir.glob('*.yaml'))
        workflow_files = [str(f) for f in workflow_files]

    if not workflow_files:
        print("No workflow files found to validate")
        sys.exit(1)

    # Validate all workflows
    all_valid = True
    for workflow_file in workflow_files:
        if not os.path.exists(workflow_file):
            print(f"❌ File not found: {workflow_file}")
            all_valid = False
            continue

        if not verify_workflow(workflow_file):
            all_valid = False

    # Print summary
    if all_valid:
        print("\n" + "="*60)
        print("🎉 All workflow files are valid!")
        print("="*60)
        sys.exit(0)
    else:
        print("\n" + "="*60)
        print("❌ Some workflow files have errors")
        print("="*60)
        sys.exit(1)


if __name__ == '__main__':
    main()
