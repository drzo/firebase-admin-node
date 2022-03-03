/*!
 * Copyright 2022 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as validator from '../utils/validator';
import { AuthClientErrorCode, FirebaseAuthError } from '../utils/error';
import {
  RecaptchaConfig,
  RecaptchaConfigAuth,
} from './auth-config';

/**
 * Interface representing the properties to update on the provided tenant.
 */
export interface UpdateProjectConfigRequest {
  /**
   * The recaptcha configuration to update on the project.
   */
  recaptchaConfig?: RecaptchaConfig;
}

/**
 * Response received from get/update project config.
 * We are only exposing the recaptcha config for now.
 */
export interface ProjectConfigServerResponse {
  recaptchaConfig?: RecaptchaConfig;
}

/**
 * Request sent to update project config.
 * We are only updating the recaptcha config for now.
 */
export interface ProjectConfigClientRequest {
  recaptchaConfig?: RecaptchaConfig;
}

/**
* Represents a project configuration.
*/
export class ProjectConfig {
  private readonly recaptchaConfig_?: RecaptchaConfigAuth;

  private static validate(request: any): void {
    if (!validator.isNonNullObject(request)) {
      throw new FirebaseAuthError(
        AuthClientErrorCode.INVALID_ARGUMENT,
        '"UpdateProjectConfigRequest" must be a valid non-null object.',
      );
    }
    const validKeys = {
      recaptchaConfig: true,
    }
    // Check for unsupported top level attributes.
    for (const key in request) {
      if (!(key in validKeys)) {
        throw new FirebaseAuthError(
          AuthClientErrorCode.INVALID_ARGUMENT,
          `"${key}" is not a valid UpdateProjectConfigRequest parameter.`,
        );
      }
    }

    RecaptchaConfigAuth.validate(request.recaptchaConfig);
  }

  /**
   * Build the corresponding server request for a UpdateProjectConfigRequest object.
   * @param configOptions - The properties to convert to a server request.
   * @returns  The equivalent server request.
   * 
   * @internal
   */
  public static buildServerRequest(configOptions: UpdateProjectConfigRequest): ProjectConfigClientRequest {
    ProjectConfig.validate(configOptions);    
    return configOptions as ProjectConfigClientRequest;
  }
 
  /**
   * The recaptcha configuration.
   */
  get recaptchaConfig(): RecaptchaConfig | undefined {
    return this.recaptchaConfig_;
  }
  /**
   * The Project Config object constructor.
   *
   * @param response - The server side response used to initialize the Project Config object.
   * @constructor
   * @internal
   */
  constructor(response: ProjectConfigServerResponse) {
    if (response.recaptchaConfig !== 'undefined') {
      this.recaptchaConfig_ = new RecaptchaConfigAuth(response.recaptchaConfig);
    }
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns A JSON-serializable representation of this object.
   */
  public toJSON(): object {
    // JSON serialization
    const json = {
      recaptchaConfig: this.recaptchaConfig_?.toJSON(),
    };
    if (typeof json.recaptchaConfig === 'undefined') {
      delete json.recaptchaConfig;
    }
    return json;
  }
}
