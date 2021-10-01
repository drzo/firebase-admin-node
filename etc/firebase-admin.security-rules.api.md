## API Report File for "firebase-admin.security-rules"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="node" />

import { Agent } from 'http';

// Warning: (ae-forgotten-export) The symbol "App" needs to be exported by the entry point index.d.ts
//
// @public
export function getSecurityRules(app?: App): SecurityRules;

// @public
export class Ruleset implements RulesetMetadata {
    readonly createTime: string;
    readonly name: string;
    // (undocumented)
    readonly source: RulesFile[];
}

// @public
export interface RulesetMetadata {
    readonly createTime: string;
    readonly name: string;
}

// @public
export class RulesetMetadataList {
    readonly nextPageToken?: string;
    readonly rulesets: RulesetMetadata[];
}

// @public
export interface RulesFile {
    // (undocumented)
    readonly content: string;
    // (undocumented)
    readonly name: string;
}

// @public
export class SecurityRules {
    // (undocumented)
    readonly app: App;
    createRuleset(file: RulesFile): Promise<Ruleset>;
    createRulesFileFromSource(name: string, source: string | Buffer): RulesFile;
    deleteRuleset(name: string): Promise<void>;
    getFirestoreRuleset(): Promise<Ruleset>;
    getRuleset(name: string): Promise<Ruleset>;
    getStorageRuleset(bucket?: string): Promise<Ruleset>;
    listRulesetMetadata(pageSize?: number, nextPageToken?: string): Promise<RulesetMetadataList>;
    releaseFirestoreRuleset(ruleset: string | RulesetMetadata): Promise<void>;
    releaseFirestoreRulesetFromSource(source: string | Buffer): Promise<Ruleset>;
    releaseStorageRuleset(ruleset: string | RulesetMetadata, bucket?: string): Promise<void>;
    releaseStorageRulesetFromSource(source: string | Buffer, bucket?: string): Promise<Ruleset>;
}

```